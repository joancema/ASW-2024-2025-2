import { Type } from 'class-transformer';
import {  IsString } from 'class-validator';

export class CreateStudentDto {

  @IsString()
  public name: string;


  @IsString()
  public email: string;


}
