import type {
  OpenApi,
  OperationObject,
  ResponseObject,
  ResponsesObject,
  Templates,
} from './types';
import responseCodes from './responseCodes.json' assert { type: 'json' };

type Line = [indentation: number, text: string];

const joinLines = (lines: Line[]) =>
  lines
    .map(([length, text]) => Array.from({ length }, () => '  ').join('') + text)
    .join('\n');

export const lowerFirstLetter = (text: string): string =>
  text.charAt(0).toLowerCase() + text.slice(1);

const endpointNamesMap: Record<string, string> = {
  'Start a raid': 'StartRaid',
  'Cancel a raid': 'CancelRaid',
  'Get Channel iCalendar': 'GetChannelICalendar',
};
export const getSchemaNamePrefix = (endpointName: string) =>
  endpointNamesMap[endpointName] || endpointName.replaceAll(' ', '');

export const getMethodName = (endpointName: string) =>
  lowerFirstLetter(getSchemaNamePrefix(endpointName));

export const getBodySchemaName = (endpointName: string) =>
  getSchemaNamePrefix(endpointName) + 'Body';

export const getParamsSchemaName = (endpointName: string) =>
  getSchemaNamePrefix(endpointName) + 'Params';

export const getResponseSchemaName = (endpointName: string) =>
  getSchemaNamePrefix(endpointName) + 'Response';

const parseResponseCodes = (responses: ResponsesObject) => {
  const responseCodesText = ['__Response Codes:__'];
  const responseCodeSuccess = [];
  const responseCodeError = [];
  for (const [code, response] of Object.entries(responses)) {
    const { description } = response as ResponseObject;
    const desc = description!.split('__Examples__')[0]!.trim();
    const codeText = responseCodes[code as keyof typeof responseCodes];
    if (!codeText) throw new Error('No response code: ' + code);
    responseCodesText.push(`_${code} ${codeText}_`);
    if (desc) responseCodesText.push(desc);
    if (code.startsWith('2')) {
      responseCodeSuccess.push(code);
    } else {
      responseCodeError.push(code);
    }
  }
  return {
    responseCodesText: responseCodesText.join('\n\n'),
    responseCodeSuccess: responseCodeSuccess.join(' | '),
    responseCodeError: responseCodeError.join(' | '),
  };
};

const generateTwitchApi = (openApi: OpenApi, templates: Templates): string => {
  const typeExports: string[] = [];
  let api: Line[] = [];

  const globalBaseUrl = openApi.servers[0]!.url;
  const mainTemplate = templates['main']!;
  const methodCommentTemplate = templates['method-comment']!;

  type Endpoint = {
    path: string;
    method: string;
    endpoint: OperationObject;
  };
  const endpointsByTags: Record<string, Endpoint[]> = {};
  for (const [path, methods] of Object.entries(openApi.paths)) {
    for (const [method, endpoint] of Object.entries(methods)) {
      const tag = endpoint.tags![0]!;
      let tagName = lowerFirstLetter(tag!.replaceAll(' ', ''));
      if (tag === 'CCLs') tagName = 'ccls';
      if (!endpointsByTags[tagName]) endpointsByTags[tagName] = [];
      endpointsByTags[tagName]!.push({ path, method, endpoint });
    }
  }

  for (const [tag, endpoints] of Object.entries(endpointsByTags)) {
    // skip get badges for now
    if (tag === 'badges') continue;

    api.push([1, `${tag} = {`]);

    for (const { path, method, endpoint } of endpoints) {
      const {
        description,
        externalDocs,
        parameters,
        requestBody,
        responses,
        servers,
        operationId,
      } = endpoint;
      const id = operationId;

      const baseUrl = servers?.[0]?.url || globalBaseUrl;
      const url = `${baseUrl}${path}`;

      let docsUrl = externalDocs?.url;
      let name = externalDocs?.description;
      if (id === 'get-global-badges') name = 'Get Global Badges';
      if (id === 'get-channel-badges') name = 'Get Channel Badges';

      const { responseCodesText, responseCodeSuccess, responseCodeError } =
        parseResponseCodes(responses!);

      let comment = methodCommentTemplate
        .replace('%DESCRIPTION%', description!)
        .replace('%METHOD%', method.toUpperCase())
        .replace('%URL%', url)
        .replace('%RESPONSE_CODES%', responseCodesText);

      if (docsUrl) {
        comment = comment.replace('%DOCS_URL%', docsUrl);
      } else {
        comment = comment.replace('@see %DOCS_URL%', '').trim();
      }

      api.push([2, '/**']);
      comment
        .split('\n')
        .forEach((line) => api.push([2, ` * ${line}`.trimEnd()]));
      api.push([2, ' */']);

      const hasParams = !!parameters;
      const hasBody = !!requestBody;
      const hasResponse = !responses!['204'];

      let methodTemplate = '';

      if (!hasParams && !hasBody) {
        methodTemplate = templates['method-signature-no-params-no-body']!;
      }
      if (!hasParams && hasBody) {
        methodTemplate = templates['method-signature-no-params-body']!;
      }
      if (hasParams && !hasBody) {
        methodTemplate = templates['method-signature-params-no-body']!;
      }
      if (hasParams && hasBody) {
        methodTemplate = templates['method-signature-params-body']!;
      }
      if (id === 'get-global-badges' || id === 'get-channel-badges') {
        methodTemplate = templates['method-signature-badges']!;
      }

      const methodName = getMethodName(name!);
      const paramsType = getParamsSchemaName(name!);
      const bodyType = getBodySchemaName(name!);
      let responseType = hasResponse ? getResponseSchemaName(name!) : 'void';
      if (id === 'get-channel-icalendar') {
        responseType = 'string';
      }

      let methodSignature = methodTemplate
        .replace('%METHOD_NAME%', methodName)
        .replace('%BASE_URL%', baseUrl)
        .replace('%PATH%', path)
        .replace('%METHOD%', method.toUpperCase())
        .replace("    method: 'GET',\n", '');

      methodSignature = methodSignature
        .replace('%RESPONSE_TYPE%', responseType)
        .replace('%RESPONSE_CODE_SUCCESS%', responseCodeSuccess)
        .replace('%RESPONSE_CODE_ERROR%', responseCodeError);

      if (hasParams) {
        methodSignature = methodSignature.replace('%PARAMS_TYPE%', paramsType);
        typeExports.push(
          `export type ${paramsType} = operations['${id}']['parameters']['query'];`,
        );
      }

      if (hasBody) {
        methodSignature = methodSignature.replace('%BODY_TYPE%', bodyType);
      }

      methodSignature.split('\n').map((line) => api.push([2, line]));
    }

    api.push([1, '};']);
  }

  for (const schemaName of Object.keys(openApi.components.schemas)) {
    typeExports.push(`export type ${schemaName} = Schema<'${schemaName}'>;`);
  }

  return (
    mainTemplate
      .replace('%TYPE_EXPORTS%', typeExports.join('\n'))
      .replace('%CONTENT%', joinLines(api).trim()) + '\n'
  );
};

export default generateTwitchApi;
