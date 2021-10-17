import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 9876;

// Activate server
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}...`);
  console.log("Press Ctrl + C to quit.");
});
