import { EnvKeys } from "../enums";

const getEnv = (key: EnvKeys) => process.env[key];

export { getEnv };
