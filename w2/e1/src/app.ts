// 1 import export variable
// import { message } from './examples/o1'
// console.log(message);
// 2 import export function
// import { operation } from './examples/o2'
// console.log( operation({ a: 1, b: 2, operator: '+' }))
// 3 import export array 
// import { students } from './examples/o3'
// console.log(students);
// 4 import export class
// import {Student } from './examples/o4'
// let student = new Student(1, 'S1', 'John', [{ street: '123 Main St', city: 'Springfield', state: 'IL', zip: 62701 }], [90, 80, 70])
// console.log(student);
// 5 import export function with callback
// import operation from './examples/o5'
// operation(1, 2, (num1, num2) => num1 + num2, (result) => console.log(result))
// 6 import export class connect HTTP client
import { fetchData, IPost  } from './examples/o6'
// fetchData<IPost[]>('https://jsonplaceholder.typicode.com/posts')
// .then((data:IPost[]) => console.log(data[0].title));
// (async ()=>{
//     let data = await fetchData<IPost[]>('https://jsonplaceholder.typicode.com/posts');
//     console.log(data[0].title);
// })()
// 7 import export callback, promises and async/await
// import { students, IStudent } from './examples/o7'

// function findStudentById(id: number, callback: (err: Error| undefined  , student: IStudent | undefined) => void) {
//     const student = students.find((s) => s.id === id);
//     if (!student) {
//         return callback(new Error('Student not found'), undefined)
//     }
//     callback(undefined,student);
// }
// findStudentById(11, (err, student) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log(student);
// })