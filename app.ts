import express, { Application } from "express";
import * as dotenv from "dotenv";
import router from "./routes"

// Load env file
dotenv.config();

// Assign port number
const PORT = process.env.PORT || 3000;

// Create application
const app: Application = express();

// Use routes
app.use('/', router)

export default app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
