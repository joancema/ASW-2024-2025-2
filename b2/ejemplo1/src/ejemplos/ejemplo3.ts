

function operationGenerica(a: number, b: number,
     funcionOperar: (a:number,b:number)=>number ,
      callback : (a:number)=>void):
 number {
    const result = funcionOperar(a,b);
    callback(result);
    return result;
    
}
export {
    operationGenerica
}
