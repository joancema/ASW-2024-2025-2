interface IOperacion{
    (num1:number,num2:number):number;
}

function operacionCallback(num1:number, num2:number ,
     operacion: IOperacion, 
      callback: (resultado:number) => void){ {
            const resultado= operacion(num1,num2)
            callback(resultado)
    }
}
// operacionCallback(2, 3, (a, b) => a + b, (resultado) => {
//     console.log(resultado); // 5
// })


export {
    operacionCallback
}