import { abilitiesRouter } from "./abilities";
import * as core from "express-serve-static-core";

export const mountRoutes = (app: core.Express) => {
  app.use("/abilities", abilitiesRouter);
};
