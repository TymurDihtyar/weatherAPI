import express from "express";

import { configs } from "./configs/config";
import { weatherRouter } from "./router/weather.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/weather", weatherRouter);

const PORT = configs.PORT;
app.listen(PORT, async () => {
  console.log(`Сервер слухає на порту ${PORT}`);
});
