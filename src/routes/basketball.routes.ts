import { Router } from "express";

import { BasketBallController } from "../controllers/BasketBallController";

const basketballRoutes = Router();
const basketballController = new BasketBallController();

basketballRoutes.get("/:sport", basketballController.handle);

export { basketballRoutes };
