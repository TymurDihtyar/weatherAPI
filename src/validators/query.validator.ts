import joi from "joi";

import { regexConstants } from "../constsnts/regex.constants";

export class QueryValidator {
  public static query = joi.object({
    q: joi.string().lowercase().regex(regexConstants.CITY).messages({
      "string.pattern.base": "Name must include only letters",
    }),
    lat: joi.string().regex(regexConstants.LAT_LON).messages({
      "string.pattern.base": "Lat must include only numbers",
    }),
    lon: joi.string().regex(regexConstants.LAT_LON).messages({
      "string.pattern.base": "Lon must include only numbers",
    }),
  });
}
