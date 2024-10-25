

export class CreateUserDto {

  private constructor(
    public readonly nombre: string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateUserDto?]  {

    const { nombre } = props;

    if ( !nombre ) return ['Nombre property is required', undefined];


    return [undefined, new CreateUserDto(nombre)];
  }


}