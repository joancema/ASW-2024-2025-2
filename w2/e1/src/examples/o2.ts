interface params {
    a: number;
    b: number;
    operator: string;

}
function operation( params: params  ): number {
    const { a, b, operator } = params;
    if (operator === '+') {
        return a + b
    } else if (operator === '-') {
        return a - b
    } else if (operator === '*') {
        return a * b
    } else if (operator === '/') {
        return a / b
    }
    return 0
}

export { operation };