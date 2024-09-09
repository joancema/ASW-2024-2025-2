import { IPost, fetchData } from './restService'


fetchData<IPost>('https://jsonplaceholder.typicode.com/posts')
    .then((data: IPost[]) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });




// import { getColegioByIdaa, getEstudianteByIdaa } from './asyncAwait'



// (async ()=>{
//     try {
//         const estudiante = await  getEstudianteByIdaa(1);
//         const colegio= await getColegioByIdaa(estudiante.colegioId);
//         console.log(estudiante, colegio)
//     } catch (error) {
//         console.log(error)        
//     }
// })()
    

// import { IEstudiante, IColegio, ICiudad } from './data'
// import { getColegioByIdUsingPromises,
//      getEstudianteByIdUsingPromises,
//     getCiudadByUsingPromises } from './promises'



// getEstudianteByIdUsingPromises(1)
// .then((estudiante:IEstudiante)=> 
//     { 
//         console.log(estudiante);
//         return getColegioByIdUsingPromises(estudiante.colegioId) 

//     } )
// .then((colegio:IColegio)=>
//     {  
//         console.log(colegio)
//         return getCiudadByUsingPromises(colegio.ciudadId) 

//     })
// .then((ciudad:ICiudad)=>
//     { 

//         console.log(ciudad)   

//     })
// .catch(error=> console.log(error))




// import { getEstudianteById, getColegioById, getCiudadById } from './callback'
// getEstudianteById(2,  (err, estudiante)=>{
//     if (err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log(estudiante)
//     getColegioById(estudiante!.colegioId, (err, colegio)=>{
//         if (err)
//         {
//             console.log(err)
//             return;
//         }
//         console.log(colegio)
//         getCiudadById(colegio!.id, (err, ciudad)=>{
//             if (err)
//             {
//                 console.log(err)
//                 return;
//             }
//             console.log(ciudad)
//         })
//     })  
    
// }  )