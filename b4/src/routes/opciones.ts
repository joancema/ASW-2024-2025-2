import  { Router } from 'express'

interface IOpciones {
    id: number;
    descripcion: string;
}
const opciones: IOpciones[] = [
    { id: 1, descripcion: 'Opción 1' },
    { id: 2, descripcion: 'Opción 2' },
    { id: 3, descripcion: 'Opción 3' },
    { id: 4, descripcion: 'Opción 4' },
    { id: 5, descripcion: 'Opción 5' }
]

const router = Router();

//localhost:3000/opciones/2


/////consultar todas las opciones
router.get('/', (req, res) => {
    res.json(opciones);
});
// consultar una opcion por id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    // const id: number = parseInt(req.params.id);
    const opcion = opciones.find(opcion => opcion.id === parseInt(id));
    if (opcion) {
        res.json(opcion);
    } else {
        res.status(404).json({
            msg: 'Opción no encontrada'
        });
    }
});

router.post('/', (req, res) => {
    //     {"descripcion": "Opción 6"}
    const { descripcion } = req.body;
    const id = opciones.length + 1;
    const opcion = { id:id, descripcion:descripcion };
    opciones.push(opcion);
    res.json(opcion);
})
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { descripcion } = req.body;
    const opcion = opciones.find(opcion => opcion.id === parseInt(id));
    if (opcion) {
        opcion.descripcion = descripcion;
        res.json(opcion);
    } else {
        res.status(404).json({
            msg: 'Opción no encontrada'
        });
    }
})
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = opciones.findIndex(opcion => opcion.id === parseInt(id));
    if (index > -1) {
        opciones.splice(index, 1);
        res.json({
            msg: 'Opción eliminada'
        });
    } else {
        res.status(404).json({
            msg: 'Opción no encontrada'
        });
    }
})

export default  router;