import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
console.log(PORT);

app.use(express.json());
app.use(helmet()); // It's a security middleware that helps secure Express apps by setting various HTTP headers
app.use(morgan("dev")); // Log the requests
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the  backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
