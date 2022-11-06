"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('combined'));
app.use((0, cors_1.default)({
    origin: ["http://127.0.0.1:8080", "http://tcc-web-app.s3-website-us-east-1.amazonaws.com"],
    credentials: true,
}));
app.use(routes_1.router);
app.use(express_1.default.json());
exports.default = app;
