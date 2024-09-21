import { Router } from 'express'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


const router = Router()

router.get('/', async (req, res) => {
  const options = await prisma.option.findMany()
  res.json(options)
})
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const option = await prisma.option.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    res.json(option)
})
router.post('/', async (req, res) => {
    const {  description } = req.body
    const option = await prisma.option.create({
        data: {
        description,
        }
    })
    res.json(option)
})
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { description } = req.body
    const option = await prisma.option.update({
        where: {
            id: parseInt(id)
        },
        data: {
            description,
        }
    })
    res.json(option)
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const option = await prisma.option.delete({
        where: {
            id: parseInt(id)
        }
    })
    res.json(option)
})

export default router




