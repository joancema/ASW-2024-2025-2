//#region primer ejemplo

// import { randomUUID } from "crypto";
import { getUUID } from './plugins/getId';
import { getAge } from './plugins/getAge';

interface BuildMakerPersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
  }
  
  interface PersonOptions {
    name: string;
    address: string;
    birthdate: string;
  }
  
  
  const buildMakeStudent = ({ getAge, getUUID }: BuildMakerPersonOptions) => {
  
    return ({ name, address, birthdate }: PersonOptions) => {
  
      return {
        id: getUUID(),
        name: name,
        address: address,
        birthdate: birthdate,
        age: getAge(birthdate),
      }
    }
  
  }

//   const makePerson = buildMakeStudent( {getAge(birthdate) {
//     return new Date().getFullYear() - new Date(birthdate).getFullYear();
//   }, getUUID() {
//     return randomUUID();
//   },  } );

const makePerson = buildMakeStudent( {getAge, getUUID} );


const obj = { name: 'John', address:'Manta', birthdate: '1900-11-08' };
const john = makePerson( obj );
console.log({...john});

//#endregion
//#region segundo ejemplo
import { httpClientPlugin } from './plugins/getHttp';

const getPokemonById = async( id: string|number ):Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

  const pokemon = await httpClientPlugin.get( url );
  return pokemon.name;
}
getPokemonById(4)
  .then( ( pokemon ) => console.log({ pokemon }) )
  .catch( ( err ) => console.error( err ) )
  .finally( () => console.log('Finalmente') );

//#endregion