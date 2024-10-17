

export class CreateCiudadanoDto {

    private constructor(
      public readonly nombre: string,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateCiudadanoDto?]  {
  
      const { nombre } = props;
  
      if ( !nombre ) return ['Nombre property is required', undefined];
  
  
      return [undefined, new CreateCiudadanoDto(nombre)];
    }
  
  
  }