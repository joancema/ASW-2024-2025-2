interface INota {
    materia: string;
    nota: number;
}
interface IDireccion {
    calle: string;
    numero: number;
}
interface IEstudiante {
    nombre: string;
    edad: number;
    direcciones: IDireccion[];
    notas: INota[];
}

const estudiantes: IEstudiante[] = [
    {
        nombre: 'Juan',
        edad: 20,
        direcciones:[
            {
                calle: 'calle 1',
                numero: 1
            },
            {
                calle: 'calle 1',
                numero: 1
            }
        ],
        notas:[
            {
                materia: 'matematicas',
                nota: 4
            },
            {
                materia: 'fisica',
                nota: 3
            }

        ]
    },
    {
        nombre: 'Maria',
        edad: 21,
        direcciones:[
            {
                calle: 'calle 2',
                numero: 2
            }
        ],
        notas:[
            {
                materia: 'matematicas',
                nota: 4
            }
        ]
    },
    {
        nombre: 'Pedro',
        edad: 22,
        direcciones:[
            {
                calle: 'calle 3',
                numero: 3
            }
        ],
        notas:[
            {
                materia: 'matematicas',
                nota: 5
            }
        ]
    }
] 
export {
    estudiantes,
    IEstudiante,
    IDireccion,
    INota
}