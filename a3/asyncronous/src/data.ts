interface IEstudiante{
    id: number;
    nombre: string;
    edad: number;
    colegioId: number;
}
interface IColegio{
    id: number;
    nombre: string;
    ciudadId: number;
}
interface ICiudad{
    id: number;
    nombre: string;
}
const estudiantes:IEstudiante[]=[
    {
        id: 1,
        nombre: "Juan",
        edad: 20,
        colegioId:1
    },
    {
        id: 2,
        nombre: "Ana",
        edad: 21,
        colegioId:2
    }
]
const colegios:IColegio[]=[
    {
        id: 1,
        nombre: "Colegio 1",
        ciudadId:1
    },
    {
        id: 2,
        nombre: "Colegio 2",
        ciudadId:2
    }
]
const ciudades:ICiudad[] = [
    {
        id: 1,
        nombre: "Cali"
    },
    {
        id: 2,
        nombre: "Bogotá"
    }
]
export {
    IEstudiante,
    IColegio,
    ICiudad,
    estudiantes,
    colegios,
    ciudades
}