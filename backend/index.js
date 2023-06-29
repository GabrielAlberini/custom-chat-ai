import express from "express";
import cors from "cors";

import { sendRequest } from "./controllers/queries.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/request", sendRequest);

app.listen(3000, () => {
  console.log("Server UP on http://localhost:3000");
});
