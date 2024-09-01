interface IGrade{
    id: number;
    grade: number;
    subject: string;

}

interface IStudent {
    id: number;
    name: string;
    age: number;
    course: string;
    grades: IGrade[];
}   
const students:IStudent[]= [
    {id: 1, name: 'S1', age: 15, course: '1ESO', grades: [{id: 1, grade: 5, subject: 'Matematicas'}, {id: 2, grade: 6, subject: 'Lengua'}, {id: 3, grade: 7, subject: 'Historia'}]},
    {id: 2, name: 'S2', age: 16, course: '2ESO', grades: [{id: 1, grade: 8, subject: 'Matematicas'}, {id: 2, grade: 9, subject: 'Lengua'}, {id: 3, grade: 10, subject: 'Historia'}]},
    {id: 3, name: 'S3', age: 17, course: '3ESO', grades: [{id: 1, grade: 8, subject: 'Matematicas'}, {id: 2, grade: 9, subject: 'Lengua'}, {id: 3, grade: 10, subject: 'Historia'}]}
]
export {IStudent, students}