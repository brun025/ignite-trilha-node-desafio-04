import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}
  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    // eslint-disable-next-line prettier/prettier
    const users = this.showUserProfileUseCase.execute({user_id});
    return response.json(users);
  }
}

export { ShowUserProfileController };
