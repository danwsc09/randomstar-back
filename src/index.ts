import express from "express";
import cors from "cors";
import helmet from "helmet";

import { mountRoutes } from "./routes";

const app = express();
const PORT = process.env.PORT || 9876;

// App configuration
app.use(helmet());
app.use(cors());
app.use(express.json());

mountRoutes(app);

// Activate server
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}...`);
  console.log("Press Ctrl + C to quit.");
});
