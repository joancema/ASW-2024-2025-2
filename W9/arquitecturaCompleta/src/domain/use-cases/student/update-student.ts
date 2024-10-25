import { UpdateStudentDto } from '../../dtos';
import { StudentEntity } from '../../entities/student.entity';
import { StudentRepository } from '../../repositories/student.repository';


export interface UpdateStudentUseCase {
  execute( dto: UpdateStudentDto ): Promise<StudentEntity>
}


export class UpdateStudent implements UpdateStudentUseCase {
  
  constructor(
    private readonly repository: StudentRepository,
  ) {}
  
  execute( dto: UpdateStudentDto ): Promise<StudentEntity> {
    return this.repository.updateById(dto);
  }

}

