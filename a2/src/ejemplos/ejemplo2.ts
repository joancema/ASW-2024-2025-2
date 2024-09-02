interface IParams {
    a: number;
    b: number;
    operador: string;
}
// function operacionMatematica(a:number, b:number, operador:string): number 
function operacionMatematica(params: IParams): number 
{
    const { a, b, operador } = params;
    let resultado:number = 0;

    if(operador == "+")
    {
        resultado = a + b;
    }
    else if(operador == "-")
    {
        resultado = a - b;
    }
    else if(operador == "*")
    {
        resultado = a * b;
    }
    else if(operador == "/")
    {
        resultado = a / b;
    }

    return resultado;

}

export {
    operacionMatematica
}