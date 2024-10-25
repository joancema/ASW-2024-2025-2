import { CreateStudentDto, UpdateStudentDto } from '../dtos';
import { StudentEntity } from '../entities/student.entity';



export abstract class StudentDatasource {

  abstract create( createUserDto: CreateStudentDto ): Promise<StudentEntity>;
  abstract getAll(): Promise<StudentEntity[]>;
  abstract findById( id: number ): Promise<StudentEntity>;
  abstract updateById( updateTodoDto: UpdateStudentDto ): Promise<StudentEntity>;
  abstract deleteById( id: number ): Promise<StudentEntity>;

}