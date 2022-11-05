import { AppError } from "../error/AppError";
import { getData } from "../service";

const homeBet = ["betclic", "betway", "betfair", "onexbet"];

const sportsAccept = ["soccer_brazil_campeonato" , "soccer_epl" , "soccer_fifa_world_cup" , "soccer_france_ligue_one" , "soccer_germany_bundesliga" , "soccer_italy_serie_a" , "soccer_portugal_primeira_liga" , "soccer_spain_la_liga"]

class FootballUseCase {
  async execute(league: string) {
    const isExist = sportsAccept.includes(league.toLowerCase())

    if(!isExist) throw new AppError("sport is not avaliable")
    
    const response = await getData(league);

    if (response.status === 200) {
      const data = await response.json();

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
