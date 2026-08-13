import fsp from 'node:fs/promises';
import generateTwitchApi from './generateTwitchApi.ts';
import parseTemplates from './parseTemplates.ts';
import type { OpenApi } from './types.ts';

const OPEN_API_URL =
  'https://github.com/DmitryScaletta/twitch-api-swagger/raw/main/openapi.json';

const fetchOpenApi = async () => {
  const response = await fetch(OPEN_API_URL);
  return response.json();
};

const [openApi, templatesText] = await Promise.all([
  fetchOpenApi(),
  fsp.readFile('./scripts/templates.md', 'utf8'),
]);

const templates = parseTemplates(templatesText);
const twitchApi = generateTwitchApi(openApi as OpenApi, templates);

await fsp.writeFile('./src/twitch-api.ts', twitchApi);
