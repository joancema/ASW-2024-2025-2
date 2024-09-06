

const search = <Type, Typeb>(array:Type[]
    ,id:Typeb
    ,searchFunction: (array:Type[], id:Typeb )=> Type
    , callback:(res:Type)=>void
  )=>{
    const res = searchFunction(array, id)
    callback(res)

}

const searchWithPromise = <Type, Typeb>(array:Type[]
    ,id:Typeb
    ,searchFunction: (array:Type[], id:Typeb )=> Type
  )=>{
    return new Promise<Type>((resolve, reject)=>{
        try {
            const res = searchFunction(array, id)
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })
}
const  searchWithAsyncAwait = async <Type, Typeb>(array:Type[]
    ,id:Typeb
    ,searchFunction: (array:Type[], id:Typeb )=> Type
  )=>{
    try {
        const res = searchFunction(array, id)
        return res
    } catch (error) {
        throw error
    }
    
}
const fetchData = async <Type>(url:string):Promise<Type[]>=>{
    const res = await fetch(url)
    return res.json()
}

const iterate = <Type>(array:Type[], method: (array:Type[])=>void )=>method(array )

export {
    search,
    iterate,
    searchWithPromise,
    searchWithAsyncAwait,
    fetchData
}