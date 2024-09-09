import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createUser() {
    const newUser = await prisma.user.create({
        data: {
        name: 'Alice',
        email: 'prueba2@hotmail.com'
    }
})
}

async function queryUser() {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

(async ()=>{
    await createUser();
    await queryUser();
    await prisma.$disconnect()
})()

