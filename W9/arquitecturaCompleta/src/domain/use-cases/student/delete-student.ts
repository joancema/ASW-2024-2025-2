import { StudentEntity } from '../../entities/student.entity';
import { StudentRepository } from '../../repositories/student.repository';


export interface DeleteStudentUseCase {
  execute( id: number ): Promise<StudentEntity>
}


export class DeleteStudent implements DeleteStudentUseCase {
  
  constructor(
    private readonly repository: StudentRepository,
  ) {}
  
  execute( id: number ): Promise<StudentEntity> {
    return this.repository.deleteById(id);
  }

}

