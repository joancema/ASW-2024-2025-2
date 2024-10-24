import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository( User )
    private readonly userRepository: Repository<User>
  ) {

  }

  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create( createUserDto );
    return this.userRepository.save( user);

  }

  findAll() {
    return this.userRepository.find({ where: { status: true } });
  }

  findOne(id: number) {
    return this.userRepository.findOneBy( { id:id, status:true } );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    
    const user = this.userRepository.create( updateUserDto );
    return this.userRepository.update( id, user );

  }

  async remove(id: number) {
    // return this.userRepository.delete( id );
    const user= await this.findOne( id );
    user.status=false;
    return this.userRepository.save( user );

  }
}
