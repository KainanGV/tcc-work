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
exports.FootballUseCase = void 0;
const AppError_1 = require("../error/AppError");
const service_1 = require("../service");
const homeBet = ["betclic", "betway", "betfair", "onexbet"];
const sportsAccept = ["soccer_brazil_campeonato", "soccer_epl", "soccer_fifa_world_cup", "soccer_france_ligue_one", "soccer_germany_bundesliga", "soccer_italy_serie_a", "soccer_portugal_primeira_liga", "soccer_spain_la_liga"];
class FootballUseCase {
    execute(league) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = sportsAccept.includes(league.toLowerCase());
            if (!isExist)
                throw new AppError_1.AppError("sport is not avaliable");
            const response = yield (0, service_1.getData)(league);
            if (response.status === 200) {
                const data = yield response.json();
                data.forEach((element) => {
                    const resultFilter = element.bookmakers.filter((value) => homeBet.includes(value.key));
                    // eslint-disable-next-line no-param-reassign
                    element.bookmakers = resultFilter;
                });
                return data;
            }
            throw new AppError_1.AppError("Service is not avaliable!", response.status);
        });
    }
}
exports.FootballUseCase = FootballUseCase;
