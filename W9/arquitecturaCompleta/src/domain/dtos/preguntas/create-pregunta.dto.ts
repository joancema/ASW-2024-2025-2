

export class CreatePreguntaDto {

    private constructor(
      public readonly texto: string,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreatePreguntaDto?]  {
  
      const { texto } = props;
  
      if ( !texto ) return ['Nombre property is required', undefined];
  
  
      return [undefined, new CreatePreguntaDto(texto)];
    }
  
  
  }