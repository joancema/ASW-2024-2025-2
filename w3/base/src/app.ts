import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  //crear usuario con permisos
  // const created = await prisma.user.create({
  //   data: {
  //     email: 'prueba2@hot.com',
  //     name:'prueba',
  //     permissions:{
  //       create:{
  //         soloLectura:true,
  //         menu:{ create: { description:"pruebamenu" }}
  //       }
  //     }
  // }
  // })
//   const created = await prisma.user.create({
//     data: {
//       email: 'prueba@hwotca.com',
//       permissions:{
//         createMany:{
//           data:[
//             {
//               soloLectura:true,
//               menuId:1
//             },
//             {
//               soloLectura:false,
//               menuId:1
//             }
//           ]
//         }
//       }
//   }
// })

  // const created = await prisma.permission.create({
  //   data: {
  //     soloLectura:true,
  //     menu:{ create: { description:"pruebamenu3" }},
  //     user:{ create: { email:"pruebax@jj.com", name:"prueba" }}
  //   }
  // })
  // console.log(created)


    
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

    // const user = await prisma.user.findUnique({
    //     where: { id: 3 }
    // })
    // console.log(user)
    
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