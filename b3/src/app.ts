// console.log(`Path: ${__filename}`);

//   NEON.TECH
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  
    //create permisions
    const newPermisions = await prisma.permision.createMany({
        data: {
            allowDelete: true,
            optionId:1,
            userId:1
            // option: {
            //     create: { description: 'option1' }
            // },
            // user: {
            //     create:{ email: '', name: '' }
            // }
        },
    })


    // Create a new user
    const newUser = await prisma.user.create({
        data: {
        email: 'prueba2@hot.com',
        name: 'prueba',
        permisions: {
            create: {  allowDelete:true, optionId:1 }
            
        }
        },
    })
    console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

    // Read all users
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)


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