# twitch-api-ts

Very simple `TwitchApi` class and TypeScript interfaces for all Twitch API endpoints

* Auto-generated from [twitch-api-swagger](https://github.com/DmitryScaletta/twitch-api-swagger)
* Uses `fetch` under the hood
* Includes types for all endpoints
  * _Request Query Parameters_
  * _Request Body_
  * _Response Body_
* Includes descriptions for the fields

## Installation

```
npm i twitch-api-ts
```

```
yarn add twitch-api-ts
```

## Usage

### Types only

```ts
import type {
  UpdateAutoModSettingsParams,
  UpdateAutoModSettingsBody,
  UpdateAutoModSettingsResponse,
} from 'twitch-api-ts';

const updateAutoModSettings = async (
  params: UpdateAutoModSettingsParams,
  body: UpdateAutoModSettingsBody,
) => {
  const searchParams = new URLSearchParams(params);
  const url = `https://api.twitch.tv/helix/moderation/automod/settings?${searchParams}`;
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      'Client-Id': process.env.CLIENT_ID,
      'Content-Type': 'application/json',
    },
  });
  return response.json() as Promise<UpdateAutoModSettingsResponse>;
}
```

### `TwitchApi` class

```ts
import { TwitchApi } from 'twitch-api-ts';

const twitchApi = new TwitchApi({
  accessToken: process.env.ACCESS_TOKEN,
  clientId: process.env.CLIENT_ID,
});

const response = await twitchApi.chat.updateChatSettings(
  // query params
  { broadcaster_id: '1', moderator_id: '2' },
  // body
  { emote_mode: true },
);

if (response.ok) {
  console.log(response.data);
} else {
  console.error(response.status);
}

const streams = await twitchApi.streams.getStreams(
  // some endpoints accepts multiple ids like this: `id=1234&id=5678`
  { user_id: ['1', '2'] },
  // override accessToken and/or clientId for different requests
  '<accessToken>',
  '<clientId>',
);

if (streams.ok) {
  console.log(streams.data);
}
```
