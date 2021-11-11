import abilitiesRouter from "./abilities";
import playersRouter from "./players";
import * as core from "express-serve-static-core";

export const mountRoutes = (app: core.Express) => {
  app.use("/api/abilities", abilitiesRouter);
  app.use("/api/players", playersRouter);
};
