import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://root:root@localhost:27017/test?authSource=admin');
  
}

const schema = new mongoose.Schema({ nombre: String });
const Ciudadano = mongoose.model('ciudadano', schema);

export { Ciudadano };