import { StudentRepository } from '../../repositories/student.repository';
import { StudentEntity } from '../../entities/student.entity';


export interface GetStudentsUseCase {
  execute(): Promise<StudentEntity[]>
}


export class GetStudents implements GetStudentsUseCase {
  
  constructor(
    private readonly repository: StudentRepository,
  ) {}
  
  execute(): Promise<StudentEntity[]> {
    return this.repository.getAll();
  }

}

