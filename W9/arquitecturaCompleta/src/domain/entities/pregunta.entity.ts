



export class PreguntaEntity {

    constructor(
      public id: number,
      public texto: string,
    ) {}
  
    
  
    public static fromObject( object: {[key: string]: any} ): PreguntaEntity {
      const { id, texto } = object;
      if ( !id ) throw 'Id is required';
      if ( !texto ) throw 'nombre is required';
  
      let newTexto;
      if ( texto ) {
        newTexto = texto.toUpperCase();
        if (  newTexto !== texto  ) {
          throw 'Texto must be uppercase'
        }
      }
      return new PreguntaEntity(id, texto)

    }
  
  }
  
  
  