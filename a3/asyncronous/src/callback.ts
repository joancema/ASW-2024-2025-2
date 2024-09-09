import { ICiudad, IColegio, IEstudiante, estudiantes, colegios,ciudades } from './data'

function getEstudianteById( id:number, callback:(err:Error|null, estudiante?:IEstudiante)=>void ){
        const estudiante = estudiantes.find(e=>e.id===id);
        if(!estudiante){
            const error = new Error("Estudiante no encontrado");
            callback(error );
        }
        callback(null,estudiante);
}
function getColegioById( id:number, callback:(err:Error|null, colegio?:IColegio)=>void ){
    const colegio = colegios.find(c=>c.id===id);
    if(!colegio){
        const error = new Error("Colegio no encontrado");
        callback(error );
    }
    callback(null,colegio);
}
function getCiudadById( id:number, callback:(err:Error|null, ciudad?:ICiudad)=>void ){
    const ciudad = ciudades.find(c=>c.id===id);
    if(!ciudad){
        const error = new Error("Ciudad no encontrada");
        callback(error );
    }
    callback(null,ciudad);
}
export {
    getCiudadById,
    getColegioById,
    getEstudianteById
}
