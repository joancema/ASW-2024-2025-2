
import {platos, restaurantes} from './data';

async function buscarPlatoPorId(id:number)
{
    const plato = platos.find(plato=> plato.id===id);
    if (!plato)
    {
        const error =  new Error();
        error.message=`No se encontró el plato con ID ${id}`
        throw error;
    }
    return plato;
}
async function buscarRestaurantePorId(id:number){
    const restaurante = restaurantes.find(restaurante=> restaurante.id===id);
    if (!restaurante)
    {
        const error= new Error();
        error.message=`El restaurante con id ${id} no pudo ser encontrado`
        throw error;
    }
    return  restaurante;
}


export {buscarPlatoPorId, buscarRestaurantePorId}