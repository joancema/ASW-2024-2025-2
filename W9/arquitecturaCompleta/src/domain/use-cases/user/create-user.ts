import { CreateUserDto } from '../../dtos';
import { UserEntity } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';


export interface CreateUserUseCase {
  execute( dto: CreateUserDto ): Promise<UserEntity>
}


export class CreateUser implements CreateUserUseCase {
  
  constructor(
    private readonly repository: UserRepository,
  ) {}
  
  execute( dto: CreateUserDto ): Promise<UserEntity> {
    return this.repository.create(dto);
  }

}

