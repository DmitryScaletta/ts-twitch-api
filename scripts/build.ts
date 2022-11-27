import fs from 'fs/promises';
import generateTwitchApi from './generateTwitchApi.js';
import parseTemplates from './parseTemplates.js';

const OPEN_API_URL = 'https://twitch-api-swagger.surge.sh/openapi.json';

const fetchOpenApi = async () => {
  const response = await fetch(OPEN_API_URL);
  return response.json();
};

const [openApi, templatesText] = await Promise.all([
  fetchOpenApi(),
  fs.readFile('./scripts/templates.md', 'utf8'),
]);

const templates = parseTemplates(templatesText);
const twitchApi = generateTwitchApi(openApi, templates);

await fs.writeFile('./twitch-api.ts', twitchApi);
