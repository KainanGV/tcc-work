import express from "express";
import bet365 from "./routes/365bet.routes";

const app = express();

app.use("/football/bet365", bet365);

app.use(express.json());

export default app;
