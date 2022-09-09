import { Request, Response } from "express";
import GetAllGamesFutebolUseCase from "./getAllGamesFutebolUseCase";

class GetAllGamesFutebolController {
  constructor(private getAllGamesFutebolUseCase: GetAllGamesFutebolUseCase) {}

  handle(request: Request, response: Response): Response {
    const data = this.getAllGamesFutebolUseCase.execute();

    return response.status(200).json(data);
  }
}

export default GetAllGamesFutebolController;
