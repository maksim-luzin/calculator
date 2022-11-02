import { env } from 'process';
import { EnvKeys } from '../enums';

const getEnv = (key: EnvKeys) => env[key];

export { getEnv };
