import "reflect-metadata"
import { DataSource } from "typeorm"
import { User  } from "./models/user.model"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "MysecretPassword",
    database: "clases",
    entities: [User],
    synchronize: true,
    logging: false,
})

async function inicializar() {
    await  AppDataSource.initialize()
    console.log("Conexión a la base de datos establecida")
}
async function guardarUsuario() {
    const userRepository = AppDataSource.getRepository(User)
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await userRepository.save(user)
    console.log("Usuario guardado")
}

(async ()=>{
    await inicializar()
    await guardarUsuario()
})()
