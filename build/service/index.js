"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const domain = `https://api.the-odds-api.com/v4/sports`;
const apiKey = "ca064fe0fd25cefa94008a3b9a71d454";
const regions = "eu"; // uk | us | eu | au. Multiple can be specified if comma delimited
const markets = "h2h"; // h2h | spreads | totals. Multiple can be specified if comma delimited
const getData = (sport) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)(`${domain}/${sport}/odds/?regions=${regions}&markets=${markets}&apiKey=${apiKey}`);
    return response;
});
exports.getData = getData;
