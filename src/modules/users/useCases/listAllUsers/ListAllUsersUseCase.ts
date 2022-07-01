import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}
class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id.toString());

    if (!user || (user && !user.admin)) {
      throw new Error("Mensagem do erro");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
