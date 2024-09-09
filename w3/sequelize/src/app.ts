import  { Sequelize } from 'sequelize';
import { User } from './models/user.model';

const sequelize = new Sequelize('postgres://postgres:MysecretPassword@localhost:5432/clases?schema=public');




(async function main() {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // await User.sync({ force: true });
    const user = User.build({ firstName: "Jane", lastName: "Doe2" });
    user.save();
    // User.create({ firstName: "Jane", lastName: "Doe" });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();




