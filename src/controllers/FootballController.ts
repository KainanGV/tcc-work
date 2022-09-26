import { Response, Request } from "express";

import { AppError } from "../error/AppError";
import { FootballUseCase } from "../useCases/FootballUseCase";

class FootballController {
  async handle(request: Request, response: Response) {
    try {
      const footballUseCase = new FootballUseCase();

      const data = await footballUseCase.execute(request.params.sport);

      return response.json(data);
    } catch (e) {
      if (e instanceof AppError) {
        return response.status(e.statusCode).json({ error: e.message });
      }

      return response.status(500).json({ error: "Error internal server!" });
    }
  }
}

export { FootballController };
