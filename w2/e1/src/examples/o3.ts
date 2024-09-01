interface grade {
    subject: string;
    score: number;
}

interface adress {
    street: string;
    city: string;
    state: string;
    zip: number;

}
interface student {
    name: string;
    age: number;
    grade: number;
    addressess: adress[],
    grades: grade[]

}

const students: student[] = [
    {
        name: 'Alice',
        age: 12,
        grade: 6,
        addressess: [
            {
                street: '1234 Elm St',
                city: 'Springfield',
                state: 'IL',
                zip: 62701
            }
        ],
        grades: [
            {
                subject: 'Math',
                score: 95
            },
            {
                subject: 'Science',
                score: 90
            }
        ]
    },
    {
        name: 'Bob',
        age: 13,
        grade: 7,
        addressess: [
            {
                street: '5678 Oak St',
                city: 'Springfield',
                state: 'IL',
                zip: 62701
            }
        ],
        grades: [
            {
                subject: 'Math',
                score: 85
            },
            {
                subject: 'Science',
                score: 80,
            }
        ]
    }
]
export { students };