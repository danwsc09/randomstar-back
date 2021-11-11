import * as core from "express-serve-static-core";
import abilitiesRouter from "./abilities";
import playersRouter from "./players";
import matchesRouter from "./matches";

export const mountRoutes = (app: core.Express) => {
  app.use("/api/abilities", abilitiesRouter);
  app.use("/api/players", playersRouter);
  app.use("/api/matches", matchesRouter);
};
