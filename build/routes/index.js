"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const football_routes_1 = require("./football.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/football", football_routes_1.footballRoutes);
