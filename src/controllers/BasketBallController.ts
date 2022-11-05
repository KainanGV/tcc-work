import { Response, Request } from "express";

import { AppError } from "../error/AppError";
import { BasketBallUseCase } from "../useCases/BasketBallUseCase";

class BasketBallController {
  async handle(request: Request, response: Response) {
    try {
      const basketBallUseCase = new BasketBallUseCase();

      const data = await basketBallUseCase.execute(request.params.sport);

      return response.json(data);
    } catch (e) {
      if (e instanceof AppError) {
        return response.status(e.statusCode).json({ error: e.message });
      }

      return response.status(500).json({ error: "Error internal server!" });
    }
  }
}

export { BasketBallController };
