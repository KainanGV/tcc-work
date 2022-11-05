import { AppError } from "../error/AppError";
import { getData } from "../service";

const homeBet = ["betclic", "betway", "betfair", "onexbet"];

const sportsAccept = ["basketball_nba"]

class BasketBallUseCase {
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

export { BasketBallUseCase };
