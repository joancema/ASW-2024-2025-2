import { CreateUserDto,
        UserDatasource,
        UserEntity,
        UserRepository,
        UpdateUserDto } from '../../domain';


export class UserRepositoryImpl implements UserRepository {

  constructor(
    private readonly datasource: UserDatasource,
  ) { }


  create( createUserDto: CreateUserDto ): Promise<UserEntity> {
    return this.datasource.create( createUserDto );
  }

  getAll(): Promise<UserEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<UserEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateUserDto: UpdateUserDto ): Promise<UserEntity> {
    return this.datasource.updateById( updateUserDto );
  }

  deleteById( id: number ): Promise<UserEntity> {
    return this.datasource.deleteById( id );
  }

}


