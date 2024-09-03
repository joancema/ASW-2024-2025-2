interface Icategoria {
    id: number;
    nombre: string;
    paisId: number;
}
interface Ideporte {
    id: number;
    nombre: string;
    categoriaId: number;
}
interface Ipais {
    id: number;
    nombre: string;
}

const categorias:Icategoria[] =[
    { id: 1, nombre: 'Contacto', paisId:1    },
    { id: 2, nombre: 'Balón pie', paisId:2 },   
]
const deportes:Ideporte[]=[
    { id: 1, nombre: 'Fútbol', categoriaId: 2 },
    { id: 2, nombre: 'Basket', categoriaId: 1 },
];
const pais: Ipais[] =[
    { id:1, nombre: 'España'},
    { id:2, nombre: 'Francia'},
]
export {
    categorias,
    deportes,
    pais,
    Icategoria,
    Ideporte,
    Ipais
}
