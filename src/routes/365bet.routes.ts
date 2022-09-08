import { Request, Response, Router } from "express";
import getAllGamesFutebolController from "../modules/service/365Bet/useCases/getAllGamesFutebol";

const bet365 = Router();

bet365.get("/", (request: Request, response: Response) =>
  getAllGamesFutebolController.handle(request, response),
);

export default bet365;
