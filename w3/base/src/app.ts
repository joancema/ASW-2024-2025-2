import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    
    // await prisma.user.create({
    //     data: {
    //       name: 'Alice',
    //       email: 'alice2@prisma.io',
    //     },
    //   })
    // const updateUser=await prisma.user.update({
    //     where: { id: 1 },
    //     data: { email: 'prueba@hotmail.com'}
    // })
    // console.log(updateUser)

    // try {
    //     const deleteUser=await prisma.user.delete({
    //         where: { id: 1 }
    //     })
    // } catch (error) {
    //     console.log(`Error: No es posible eliminar el registro porque no existe`)
    // }

    const user = await prisma.user.findUnique({
        where: { id: 3 }
    })
    console.log(user)
    
    // const allUsers = await prisma.user.findMany();
    // console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })