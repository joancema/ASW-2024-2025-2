import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Type } from 'class-transformer';

@Module({
  controllers: [UsersController],
  imports: [
    // Add the following line to the imports array:
    TypeOrmModule.forFeature([User]),
  ],
  exports: [TypeOrmModule],
  providers: [UsersService],
})
export class UsersModule {}
