import express, { NextFunction, Request, Response } from "express";

import { configs } from "./configs/config";
import { ApiError } from "./errors/api.error";
import { weatherRouter } from "./router/weather.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/weather", weatherRouter);

app.use("*", (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  return res.status(err?.status || 500).json({
    message: err?.message,
    status: err?.status,
  });
});

const PORT = configs.PORT;
app.listen(PORT, async () => {
  console.log(`Сервер слухає на порту ${PORT}`);
});
