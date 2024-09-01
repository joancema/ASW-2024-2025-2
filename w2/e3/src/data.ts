interface IPlato {
    id: number,
    descripcion: string,
    idrestaurante: number,
    restaurante?: IRestaurante
}
interface IRestaurante {
    id: number,
    nombre: string,
    idpais: number,
    pais?: IPais
}
interface IPais {
    id: number,
    nombre: string
}

const platos:IPlato[] =[
    { id:1, descripcion:'Encebollado', idrestaurante:1  },
    { id:2, descripcion:'Ceviche', idrestaurante:1  },
    { id:3, descripcion:'Tigrillo', idrestaurante:2  },
    { id:4, descripcion:'Bolon de mani', idrestaurante:2  },
]
const restaurantes:IRestaurante[]=[
    {id:1, nombre:'Mi restaurante', idpais:1},
    {id:2, nombre:'El secreto de Tere', idpais:1},
    {id:3, nombre:'El misterio', idpais:2},
]

const paises=[
    {id:1, nombre: 'Ecuador'},
    {id:2, nombre: 'Perú'},
]

export {
    IPlato,
    IRestaurante,
    IPais,
    platos,
    restaurantes,
    paises
}