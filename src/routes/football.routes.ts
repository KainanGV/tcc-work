import { Router } from "express";

import { FootballController } from "../controllers/FootballController";

const footballRoutes = Router();
const footballController = new FootballController();

footballRoutes.get("/:sport", footballController.handle);

export { footballRoutes };
