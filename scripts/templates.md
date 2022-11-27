# templates

## main

```ts
import type { components, operations } from './twitch-api.generated';

type Schema<T extends keyof components['schemas']> = components['schemas'][T];

%TYPE_EXPORTS%

type SuccessCode = 200 | 202 | 204;
type ErrorCode = 400 | 401 | 403 | 404 | 409 | 422 | 425 | 429 | 500;
export type ApiResponse<
  TData,
  TSuccessCode extends SuccessCode,
  TErrorCode extends ErrorCode,
> = Promise<
  | { ok: true; status: TSuccessCode; data: TData }
  | { ok: false; status: TErrorCode; data: unknown }
>;

const getApiResponse = async <
  TData,
  TSuccessCode extends SuccessCode,
  TErrorCode extends ErrorCode,
>(
  response: Response,
): ApiResponse<TData, TSuccessCode, TErrorCode> => ({
  ok: response.ok,
  status: response.status as any,
  data: await response.json(),
});

const getSearchParams = <T extends Record<string, any>>(params: T) => {
  const kvPairs: string[] = [];
  for (const key of Object.keys(params)) {
    const value = params[key];
    if (Array.isArray(value)) {
      value.forEach((v) => kvPairs.push(`${key}=${v}`));
    } else {
      kvPairs.push(`${key}=${value}`);
    }
  }
  return kvPairs.join('&');
};

export type TwitchApiOptions = {
  accessToken?: string;
  clientId?: string;
};

export class TwitchApi {
  private _accessToken: string;
  private _clientId: string;

  constructor({ accessToken = '', clientId = '' }: TwitchApiOptions = {}) {
    this._accessToken = accessToken;
    this._clientId = clientId;
  }

  private getAuthHeaders(accessToken: string, clientId: string) {
    return {
      Authorization: `Bearer ${accessToken || this._accessToken}`,
      'Client-Id': clientId || this._clientId,
    };
  }

  %CONTENT%
}
```

## method-comment

```md
%DESCRIPTION%

__URL:__

`%METHOD% %URL%`

%RESPONSE_CODES%

@see %DOCS_URL%
```

## method-signature-no-params-no-body

```ts
%METHOD_NAME%: async (accessToken = '', clientId = '') => {
  const url = '%URL%';
  const response = await fetch(url, {
    method: '%METHOD%',
    headers: this.getAuthHeaders(accessToken, clientId),
  });
  return getApiResponse<%RESPONSE_TYPE%, %RESPONSE_CODE_SUCCESS%, %RESPONSE_CODE_ERROR%>(response);
},
```

## method-signature-no-params-body

```ts
%METHOD_NAME%: async (
  body: %BODY_TYPE%,
  accessToken = '',
  clientId = '',
) => {
  const url = '%URL%';
  const response = await fetch(url, {
    method: '%METHOD%',
    body: JSON.stringify(body),
    headers: {
      ...this.getAuthHeaders(accessToken, clientId),
      'Content-Type': 'application/json',
    },
  });
  return getApiResponse<%RESPONSE_TYPE%, %RESPONSE_CODE_SUCCESS%, %RESPONSE_CODE_ERROR%>(response);
},
```

## method-signature-params-no-body

```ts
%METHOD_NAME%: async (
  params: %PARAMS_TYPE%,
  accessToken = '',
  clientId = '',
) => {
  const s = getSearchParams(params);
  const url = `%URL%?${s}`;
  const response = await fetch(url, {
    method: '%METHOD%',
    headers: this.getAuthHeaders(accessToken, clientId),
  });
  return getApiResponse<%RESPONSE_TYPE%, %RESPONSE_CODE_SUCCESS%, %RESPONSE_CODE_ERROR%>(response);
},
```

## method-signature-params-body

```ts
%METHOD_NAME%: async (
  params: %PARAMS_TYPE%,
  body: %BODY_TYPE%,
  accessToken = '',
  clientId = '',
) => {
  const s = getSearchParams(params);
  const url = `%URL%?${s}`;
  const response = await fetch(url, {
    method: '%METHOD%',
    body: JSON.stringify(body),
    headers: {
      ...this.getAuthHeaders(accessToken, clientId),
      'Content-Type': 'application/json',
    },
  });
  return getApiResponse<%RESPONSE_TYPE%, %RESPONSE_CODE_SUCCESS%, %RESPONSE_CODE_ERROR%>(response);
},
```
