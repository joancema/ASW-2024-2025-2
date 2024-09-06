import { search,iterate,searchWithPromise, searchWithAsyncAwait , users, IUser, fetchData, IPokemon } from './lib'


// iterate<IUser>(users, (users: IUser[])=> {
//     users.forEach((user)=>console.log(user))
// })
// iterate<IUser>(users, (users: IUser[])=> {
//     for (const user of users) {
//         console.log(user)
//     }
// })

// search<IUser, number>(users, 2, (users: IUser[], id: number)=> 
//     { const user=users.find((ele)=>ele.id===id);
//         if(!user) throw new Error('User not found')
//         return user;
//     }    , (res) => {
//     console.log(res)
// })

// searchWithPromise<IUser, number>(users, 2, (users: IUser[], id: number)=> 
//     { const user=users.find((ele)=>ele.id===id);
//         if(!user) throw new Error('User not found')
//         return user;
//     }).then((res)=>console.log(res)).catch((err)=>console.log(err))

// (async ()=>{
//     const res =await searchWithAsyncAwait<IUser, number>(users, 1, (users: IUser[], id: number)=> 
//     { const user=users.find((ele)=>ele.id===id);
//         if(!user) throw new Error('User not found')
//         return user;
//     })
//     console.log(res)
// })()

fetchData<IPokemon>('https://pokeapi.co/api/v2/pokemon/ditto')
.then((res)=>console.log(res)).catch((err)=>console.log(err))

