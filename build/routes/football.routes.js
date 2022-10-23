"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.footballRoutes = void 0;
const express_1 = require("express");
const FootballController_1 = require("../controllers/FootballController");
const footballRoutes = (0, express_1.Router)();
exports.footballRoutes = footballRoutes;
const footballController = new FootballController_1.FootballController();
footballRoutes.get("/:sport", footballController.handle);
