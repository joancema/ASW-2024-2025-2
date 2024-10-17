

export class UpdateCiudadanoDto {

  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.nombre ) returnObj.nombre = this.nombre;

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateCiudadanoDto?]  {

    const { id, nombre } = props;
    let newNombre =nombre;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( nombre ) {
      newNombre =  nombre.toUpperCase();
      if ( newNombre !== nombre ) {
        return ['nombre must be uppercase'];
      }
    }

    return [undefined, new UpdateCiudadanoDto(id, nombre)];
  }


}