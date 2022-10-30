import cors from "cors";
import express from "express";

import { router } from "./routes";

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(router);
app.use(express.json());

export default app;