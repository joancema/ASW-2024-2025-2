import { CreateStudentDto } from '../../dtos';
import { StudentEntity } from '../../entities/student.entity';
import { StudentRepository } from '../../repositories/student.repository';


export interface CreateStudentUseCase {
  execute( dto: CreateStudentDto ): Promise<StudentEntity>
}


export class CreateStudent implements CreateStudentUseCase {
  
  constructor(
    private readonly repository: StudentRepository,
  ) {}
  
  execute( dto: CreateStudentDto ): Promise<StudentEntity> {
    return this.repository.create(dto);
  }

}

