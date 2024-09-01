import {IPlato, IRestaurante, IPais, paises, platos, restaurantes} from './data'

function buscarPlatoPorId(id: number):Promise<IPlato>
{
    return new Promise((resolve, reject)=>{
        const plato = platos.find(plato=> plato.id===id);
        if (!plato)
        {
            const error =  new Error();
            error.message=`No se encontró el plato con ID ${id}`
            reject(error)
        }
        resolve(plato!)

    })
}
function buscarRestaurantePorId(id:number):Promise<IRestaurante> {
    return new Promise((resolve, reject)=>{
        const restaurante = restaurantes.find(restaurante=> restaurante.id===id);
        if (!restaurante)
        {
            const error= new Error();
            error.message=`El restaurante con id ${id} no pudo ser encontrado`
            reject(error)
        }
        resolve(restaurante!)
    })
    
    
}

export {
    buscarPlatoPorId,
    buscarRestaurantePorId

}
