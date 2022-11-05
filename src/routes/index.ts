import { Router } from "express";
import { basketballRoutes } from "./basketball.routes";

import { footballRoutes } from "./football.routes";

const router = Router();

router.use("/football", footballRoutes);
router.use("/basketball", basketballRoutes);

export { router };
