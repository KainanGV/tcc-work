import GetAllGamesFutebolUseCase from "./getAllGamesFutebolUseCase";

import GetAllGamesFutebolController from "./getAllGamesFutebolController";

const getAllGamesFutebolUseCase = new GetAllGamesFutebolUseCase();

const getAllGamesFutebolController = new GetAllGamesFutebolController(
  getAllGamesFutebolUseCase,
);

export default getAllGamesFutebolController;
