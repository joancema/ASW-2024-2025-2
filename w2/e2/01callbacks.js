//asdfasdfdsaf

const platos=[
    { id:1, descripcion:'Encebollado', idrestaurante:1  },
    { id:2, descripcion:'Ceviche', idrestaurante:1  },
    { id:3, descripcion:'Tigrillo', idrestaurante:2  },
    { id:4, descripcion:'Bolon de mani', idrestaurante:2  },
]
const restaurantes=[
    {id:1, nombre:'Mi restaurante', idpais:1},
    {id:2, nombre:'El secreto de Tere', idpais:1},
    {id:3, nombre:'El misterio', idpais:2},
]

const paises=[
    {id:1, nombre: 'Ecuador'},
    {id:2, nombre: 'Perú'},
]


function buscarPlatoPorId(id, callback)
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

function buscarRestaurantePorId(id, callback){
    const restaurante = restaurantes.find(restaurante=> restaurante.id===id);
    if (!restaurante)
    {
        const error= new Error();
        error.message=`El restaurante con id ${id} no pudo ser encontrado`
        return callback(error)
    }
    return callback(null, restaurante)
}
function buscarPaisPorId(id, callback){
    const pais =  paises.find(pais=> pais.id=== id);
    if (!pais)
    {
        return callback(new Error(`No se encontró el país con ID ${id} , busque con otro ID`))
    }
    return callback(null, pais)
}





buscarPlatoPorId(2, ( err, plato )=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    buscarRestaurantePorId(plato.idrestaurante, (err, restaurante)=>{
        if (err)
        {
            console.log(err.message);
            return;
        }
        plato.restaurante= restaurante
        delete plato.idrestaurante;
        console.log(plato);
        buscarPaisPorId(restaurante.idpais, (err, pais) =>{
            if (err)
            {
                console.log(err.message);
                return;
            }
            plato.restaurante.pais= pais;
        })
    })
}  ) 