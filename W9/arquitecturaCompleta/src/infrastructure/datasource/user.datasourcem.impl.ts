import { User } from '../../data/mongo';
import { CreateUserDto, UserDatasource , UserEntity, UpdateUserDto } from '../../domain';




export class UserDatasourceImpl implements UserDatasource {

  async create( createUserDto: CreateUserDto ): Promise<UserEntity> {
    const user = new User(createUserDto);
    await user.save();
    return UserEntity.fromObject( user );
    
  }

  async getAll(): Promise<UserEntity[]>   {
    try {
      const users = await User.find();
      // console.log(ciudadanos);
      return users.map( user => UserEntity.fromObject(user) );
    }
    catch (error) {
      console.log(error);
      return [];
    }
  }

  async findById( id: number ): Promise<UserEntity> {
    const user = await User.findById(id);
    if ( !user ) throw `User with id ${ id } not found`;
    return UserEntity.fromObject(user);
  }

  async updateById( updateUserDto: UpdateUserDto ): Promise<UserEntity> {
    const user = await User.findById(updateUserDto.id);
    if ( !user ) throw `User with id ${ updateUserDto.id } not found`;
    user.set(updateUserDto.values);
    await user.save();
    return UserEntity.fromObject(user);
  }

  async deleteById( id: number ): Promise<UserEntity> {
    const user = await User.findById(id);
    if ( !user ) throw `User with id ${ id } not found`;
    await User.deleteOne({ _id:id});
    return UserEntity.fromObject(user);
  }

}