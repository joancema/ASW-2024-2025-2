interface Operation {
    (num1: number, num2: number): number;

}

export default function operation(num1: number, num2: number, operation: Operation,  callback: (result: number) => void):void {
    // Perform the operation
    const result = operation(num1, num2);
    // Call the callback function with the result
    callback(result);
}