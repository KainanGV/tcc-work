import cors from "cors";
import express from "express";
import morgan from 'morgan'

import { router } from "./routes";

const app = express();

app.use(morgan('combined'))

app.use(cors({
  origin: ["http://127.0.0.1:8080", "http://tcc-web-app.s3-website-us-east-1.amazonaws.com"],
  credentials: true,
}));

app.use(router);
app.use(express.json());

export default app;
