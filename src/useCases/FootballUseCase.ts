import { AppError } from "../error/AppError";
import { getData } from "../service";

const homeBet = ["betclic", "betway", "betfair", "onexbet"];

const sportsAccept = ["soccer_brazil_campeonato" , "soccer_epl" , "soccer_fifa_world_cup" , "soccer_france_ligue_one" , "soccer_germany_bundesliga" , "soccer_italy_serie_a" , "soccer_portugal_primeira_liga" , "soccer_spain_la_liga", "soccer_uefa_champs_league", "soccer_uefa_europa_league"]

class FootballUseCase {
  async execute(league: string) {
    const isExist = sportsAccept.includes(league.toLowerCase())

    if(!isExist) throw new AppError("sport is not avaliable")
    
    const response = await getData(league);

    const data = await response.json();    

    if (response.status === 200) {

      data.forEach((element: any) => {
        const resultFilter = element.bookmakers.filter((value: any) =>
          homeBet.includes(value.key),
        );

        // eslint-disable-next-line no-param-reassign
        element.bookmakers = resultFilter;
      });

      return data;
    }

    throw new AppError("Service is not avaliable!", response.status);
  }
}

export { FootballUseCase };
