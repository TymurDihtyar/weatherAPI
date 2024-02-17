import { configs } from "../configs/config";

const baseURL = configs.BASE_URL;
const data = "/data/2.5/weather";
const geo = "/geo/1.0/direct";

const urls = {
  data,
  geo,
};

export { baseURL, urls };
