import { Character, defaultCharacter, ModelProviderName, Clients } from "@elizaos/core";
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const marcusData = JSON.parse(
    readFileSync(join(__dirname, 'characters', 'marcus.character.json'), 'utf-8')
);

export const character: Character = {
    ...defaultCharacter,
    clients: [Clients.TWITTER],
    modelProvider: ModelProviderName.ANTHROPIC,
    ...marcusData,
};
