import {IPlato, IRestaurante, IPais, paises, platos, restaurantes} from './data'


function buscarPlatoPorId(id:number, callback: (err:Error|null, plato?:IPlato)=>void)
{
    const plato = platos.find(plato=> plato.id===id);
    if (!plato)
    {
        const error =  new Error();
        error.message=`No se encontró el plato con ID ${id}`
        return callback(error)
    }
    return callback(null, plato)
}

function buscarRestaurantePorId(id:number, callback: (err:Error|null, restaurante?:IRestaurante)=>void){
    const restaurante = restaurantes.find(restaurante=> restaurante.id===id);
    if (!restaurante)
    {
        const error= new Error();
        error.message=`El restaurante con id ${id} no pudo ser encontrado`
        return callback(error)
    }
    return callback(null, restaurante)
}
function buscarPaisPorId(id: number, callback: (err:Error|null, pais?:IPais)=>void){
    const pais =  paises.find(pais=> pais.id=== id);
    if (!pais)
    {
        return callback(new Error(`No se encontró el país con ID ${id} , busque con otro ID`))
    }
    return callback(null, pais)
}







export {
    buscarPlatoPorId,
    buscarRestaurantePorId,
    buscarPaisPorId
}