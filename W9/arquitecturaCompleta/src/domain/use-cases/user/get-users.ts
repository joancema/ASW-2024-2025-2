import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';


export interface GetUsersUseCase {
  execute(): Promise<UserEntity[]>
}


export class GetUsers implements GetUsersUseCase {
  
  constructor(
    private readonly repository: UserRepository,
  ) {}
  
  execute(): Promise<UserEntity[]> {
    return this.repository.getAll();
  }

}

