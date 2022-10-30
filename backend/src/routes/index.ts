import { Router } from "express";

import { footballRoutes } from "./football.routes";

const router = Router();

router.use("/football", footballRoutes);

export { router };
