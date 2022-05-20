/* eslint-disable no-unused-vars */

const env = 'postgresql';
const databaseSettingsByEnv = {
  development: {
    adapter: 'sqlite',
  },
  production: {
    adapter: 'postgresql',
  },
};

const databaseConfiguration = databaseSettingsByEnv[env];
