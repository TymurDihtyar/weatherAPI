import { Router } from "express";

import { weatherController } from "../controllers/weather.controller";
import { paramsMiddleware } from "../middlewares/params.middleware";

const router = Router();

router.get("/", paramsMiddleware.checkParams, weatherController.getWeather);

export const weatherRouter = router;
