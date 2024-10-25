import { Student } from '../../data/mongo';
import { CreateStudentDto, StudentDatasource , StudentEntity, UpdateStudentDto } from '../../domain';




export class StudentDatasourceImpl implements StudentDatasource {

  async create( createStudentDto: CreateStudentDto ): Promise<StudentEntity> {
    const student = new Student(createStudentDto);
    await student.save();
    return StudentEntity.fromObject( student );
    
  }

  async getAll(): Promise<StudentEntity[]>   {
    try {
      const students = await Student.find();
      // console.log(ciudadanos);
      return students.map( student => StudentEntity.fromObject(student) );
    }
    catch (error) {
      console.log(error);
      return [];
    }
  }

  async findById( id: number ): Promise<StudentEntity> {
    const student = await Student.findById(id);
    if ( !student ) throw `Student with id ${ id } not found`;
    return StudentEntity.fromObject(student);
  }

  async updateById( updateStudentDto: UpdateStudentDto ): Promise<StudentEntity> {
    const student = await Student.findById(updateStudentDto.id);
    if ( !student ) throw `Student with id ${ updateStudentDto.id } not found`;
    student.set(updateStudentDto.values);
    await student.save();
    return StudentEntity.fromObject(student);
  }

  async deleteById( id: number ): Promise<StudentEntity> {
    const student = await Student.findById(id);
    if ( !student ) throw `Student with id ${ id } not found`;
    await Student.deleteOne({ _id:id});
    return StudentEntity.fromObject(student);
  }

}