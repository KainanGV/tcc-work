import { AppError } from "../error/AppError";
import { getData } from "../service";

const homeBet = ["betclic", "betway", "betfair", "onexbet"];

class FootballUseCase {
  async execute(league: string) {
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
