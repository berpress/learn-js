import fs from 'fs';

const configFileNamesByEnv = {
  development: 'database.development.json',
  production: 'database.production.json',
  test: 'database.test.json',
};

const filename = configFileNamesByEnv[env];
const raw = fs.readFileSync(filename);
const config = JSON.parse(raw);