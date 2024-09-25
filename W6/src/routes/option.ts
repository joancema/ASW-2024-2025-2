import { Router } from 'express'



const router = Router()

const options = [
    {
        id: 1,
        name: 'Option 1'
    },
    {
        id: 2,
        name: 'Option 2'
    }
]

router.get('/', (req, res) => {
    res.json(options)
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const option = options.find(option => option.id === id)
    if (option) {
        res.json(option)
    } else {
        res.status(404).send('Option not found')
    }
})


export default router