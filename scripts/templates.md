# templates

## main

```ts
import type { components, operations } from './twitch-api.generated';

type Schema<T extends keyof components['schemas']> = components['schemas'][T];
type ParamsSchema<T extends keyof operations> =
  operations[T] extends { parameters: { query?: infer Q } }
    ? Q
    : never;

%TYPE_EXPORTS%

type SuccessCode = 200 | 202 | 204;
type ErrorCode = 400 | 401 | 403 | 404 | 409 | 422 | 425 | 429 | 500;
export type ApiResponse<
  TData,
  TSuccessCode extends SuccessCode = SuccessCode,
  TErrorCode extends ErrorCode = ErrorCode,
> = Promise<
  | { ok: true; status: TSuccessCode; data: TData }
  | { ok: false; status: TErrorCode; data: unknown }
>;

const BASE_URL = 'https://api.twitch.tv/helix';

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

type CallApiOptions = {
  path: string;
  method?: string;
  params?: Record<string, any> | null;
  body?: Record<string, any> | null;
  requiresAuth?: boolean;
  options?: {
    clientId?: string,
    accessToken?: string,
    requestInit?: RequestInit,
  };
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

  private async callApi<
    TData,
    TSuccessCode extends SuccessCode = SuccessCode,
    TErrorCode extends ErrorCode = ErrorCode,
  >({
    path,
    method = 'GET',
    params,
    body,
    requiresAuth = true,
    options: {
      clientId,
      accessToken,
      requestInit = {},
    } = {},
  }: CallApiOptions): ApiResponse<TData, TSuccessCode, TErrorCode> {
    const url = params
      ? `${BASE_URL}${path}?${getSearchParams(params)}`
      : `${BASE_URL}${path}`;
    const options: RequestInit = { ...requestInit, method };
    const headers = new Headers();
    options.headers = headers;
    if (body) {
      headers.set('Content-Type', 'application/json');
      options.body = JSON.stringify(body);
    }
    if (requiresAuth) {
      options.headers.set(
        'Authorization',
        `Bearer ${accessToken || this._accessToken}`,
      );
      options.headers.set('Client-Id', clientId || this._clientId);
    }
    const response = await fetch(url, options);
    const status = response.status as any;
    let data = null;
    if (status === 200 && path === '/schedule/icalendar') {
      data = await response.text();
    } else if (status !== 204) {
      data = await response.json();
    }
    return {
      ok: response.ok,
      status,
      data,
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
%METHOD_NAME%: (options: CallApiOptions['options'] = {}) => 
  this.callApi<%RESPONSE_TYPE%, %RESPONSE_CODE_SUCCESS%, %RESPONSE_CODE_ERROR%>({
    path: '%PATH%',
    method: '%METHOD%',
    options,
  }),
```

## method-signature-no-params-body

```ts
%METHOD_NAME%: (
  body: %BODY_TYPE%,
  options: CallApiOptions['options'] = {}
) =>
  this.callApi<%RESPONSE_TYPE%, %RESPONSE_CODE_SUCCESS%, %RESPONSE_CODE_ERROR%>({
    path: '%PATH%',
    method: '%METHOD%',
    body,
    options,
  }),
```

## method-signature-params-no-body

```ts
%METHOD_NAME%: (
  params: %PARAMS_TYPE%,
  options: CallApiOptions['options'] = {}
) =>
  this.callApi<%RESPONSE_TYPE%, %RESPONSE_CODE_SUCCESS%, %RESPONSE_CODE_ERROR%>({
    path: '%PATH%',
    method: '%METHOD%',
    params,
    options,
  }),
```

## method-signature-params-body

```ts
%METHOD_NAME%: (
  params: %PARAMS_TYPE%,
  body: %BODY_TYPE%,
  options: CallApiOptions['options'] = {}
) =>
  this.callApi<%RESPONSE_TYPE%, %RESPONSE_CODE_SUCCESS%, %RESPONSE_CODE_ERROR%>({
    path: '%PATH%',
    method: '%METHOD%',
    params,
    body,
    options,
  }),
```
