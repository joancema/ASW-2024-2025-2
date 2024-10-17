

export class UpdatePreguntaDto {

    private constructor(
      public readonly id: number,
      public readonly texto?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.texto ) returnObj.texto = this.texto;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdatePreguntaDto?]  {
  
      const { id, texto } = props;
      let newTexto =texto;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( texto ) {
        newTexto =  texto.toUpperCase();
        if ( newTexto !== texto ) {
          return ['texto must be uppercase'];
        }
      }
  
      return [undefined, new UpdatePreguntaDto(id, texto)];
    }
  
  
  }