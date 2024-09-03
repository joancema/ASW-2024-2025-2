interface IParams{
    a: number;
    b: number;
    operator: string;
}
function operation( params:IParams  ): number {    
    const { a, b, operator } = params
    let result:number = 0;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            result = 0;
            break;
    }
    return result;
}


export {
    operation
}