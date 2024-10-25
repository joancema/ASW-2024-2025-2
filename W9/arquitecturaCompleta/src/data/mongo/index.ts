import mongoose from 'mongoose';
import { envs } from '../../config/envs';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(  envs.MONGO_URL);
  console.log('Conectado a la base de datos', envs.MONGO_URL);
  
}

const schema = new mongoose.Schema({ nombre: String });
const Ciudadano = mongoose.model('ciudadano', schema);

const schemaUser = new mongoose.Schema({ nombre: String });
const User = mongoose.model('user', schemaUser);

const schemaStudent = new mongoose.Schema({ nombre: String });
const Student = mongoose.model('student', schemaStudent);


export { Ciudadano, User, Student };