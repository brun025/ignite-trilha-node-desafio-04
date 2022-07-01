import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    // eslint-disable-next-line prettier/prettier
    const user = this.turnUserAdminUseCase.execute({user_id});
    return response.json(user);
  }
}

export { TurnUserAdminController };
