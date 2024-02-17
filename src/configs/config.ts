import { config } from "dotenv";
config();

export const configs = {
  PORT: process.env.PORT,

  API_KEY: process.env.API_KEY,

  BASE_URL: process.env.BASE_URL,
  BASE_URL_GEO: process.env.BASE_URL_GEO,
  BASE_URL_DATA: process.env.BASE_URL_DATA,
  TYPE_DATA: process.env.TYPE_DATA,
};
