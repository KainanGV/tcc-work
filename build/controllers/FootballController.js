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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballController = void 0;
const AppError_1 = require("../error/AppError");
const FootballUseCase_1 = require("../useCases/FootballUseCase");
class FootballController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const footballUseCase = new FootballUseCase_1.FootballUseCase();
                const data = yield footballUseCase.execute(request.params.sport);
                return response.json(data);
            }
            catch (e) {
                if (e instanceof AppError_1.AppError) {
                    return response.status(e.statusCode).json({ error: e.message });
                }
                return response.status(500).json({ error: "Error internal server!" });
            }
        });
    }
}
exports.FootballController = FootballController;
