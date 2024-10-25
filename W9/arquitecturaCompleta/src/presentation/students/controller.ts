import { Request, Response } from 'express';
import { CreateStudentDto, UpdateStudentDto } from '../../domain/dtos';
import { StudentRepository } from '../../domain';


export class StudentsController {

  //* Dependency Injection
  constructor(
    private readonly studentRepository: StudentRepository,
  ) { }


  public getStudents = async ( req: Request, res: Response ) => {
    const students = await this.studentRepository.getAll();
    return res.json( students );
  };

  public getStudentById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const student = await this.studentRepository.findById( id );
      res.json( student );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createStudent = async ( req: Request, res: Response ) => {
    const [ error, createStudentDto ] = CreateStudentDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );
    const newStudent = await this.studentRepository.create( createStudentDto! );
    res.json( newStudent );

  };

  public updateStudent = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateStudentDto ] = UpdateStudentDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedStudent = await this.studentRepository.updateById( updateStudentDto! );
    return res.json( updatedStudent );

  };


  public deleteStudent = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const studentDeleted = await this.studentRepository.deleteById( id );
    res.json( studentDeleted );

  };



}