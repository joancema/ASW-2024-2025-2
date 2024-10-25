

export class CreateStudentDto {

  private constructor(
    public readonly nombre: string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateStudentDto?]  {

    const { nombre } = props;

    if ( !nombre ) return ['Nombre property is required', undefined];


    return [undefined, new CreateStudentDto(nombre)];
  }


}