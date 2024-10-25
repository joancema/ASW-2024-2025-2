import { StudentEntity } from '../../entities/student.entity';
import { StudentRepository } from '../../repositories/student.repository';


export interface GetStudentUseCase {
  execute( id: number ): Promise<StudentEntity>
}


export class GetStudent implements GetStudentUseCase {
  
  constructor(
    private readonly repository: StudentRepository,
  ) {}
  
  execute( id: number ): Promise<StudentEntity> {
    return this.repository.findById(id);
  }

}

