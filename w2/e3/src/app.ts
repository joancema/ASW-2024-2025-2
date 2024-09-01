import { buscarPlatoPorId, buscarRestaurantePorId } from './asyncAwait';

// buscarPlatoPorId(1).then
(async  ()=>{

    try {
        const plato =  await buscarPlatoPorId(1);
        const restaurante =  await buscarRestaurantePorId(plato.idrestaurante)
        // const pais =  await buscarPaisPorId(restaurante.idpais)
        plato.restaurante= restaurante;
        // plato.restaurante.pais= pais;
        console.log(plato);
        
    } catch (error) {
        if (error instanceof Error) console.log(error.message)
        // if (error instanceof Error) return error.message
	    // return String(error)  
    }


})()



// import { buscarPlatoPorId, buscarRestaurantePorId } from './promises';
// import { IPlato, IRestaurante } from './data';

// buscarPlatoPorId(2)
// .then((plato:IPlato)=>{
//     console.log(plato);
//     return buscarRestaurantePorId(plato!.idrestaurante)
// })
// .then((restaurante:IRestaurante)=>{
//     console.log(restaurante);
//     // return buscarpaisPorId(restaurante.idpais)
// })
// // .then((pais)=>{
//     // console.log(pais)
// // })
// .catch((error: Error)=>{
//     console.log(error);
// })



// import { buscarPlatoPorId, buscarRestaurantePorId, buscarPaisPorId } from './callback';
// buscarPlatoPorId(2, ( err, plato )=>{
//     if (err)
//     {
//         console.log(err.message);
//         return;
//     }
//     buscarRestaurantePorId(plato!.idrestaurante, (err, restaurante)=>{
//         if (err)
//         {
//             console.log(err.message);
//             return;
//         }
//         plato!.restaurante= restaurante
//         // delete plato!.idrestaurante;
//         // console.log(plato);
//         buscarPaisPorId(restaurante!.idpais, (err, pais) =>{
//             if (err)
//             {
//                 console.log(err.message);
//                 return;
//             }
//             plato!.restaurante!.pais= pais;
//             console.log(plato);
//         })
//     })
// }  ) 
