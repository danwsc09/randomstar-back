import express from "express";
import cors from "cors";
import helmet from "helmet";

import { mountRoutes } from "./routes";

export const app = express();

// App configuration
app.use(helmet());
app.use(cors());
app.use(express.json());

mountRoutes(app);
