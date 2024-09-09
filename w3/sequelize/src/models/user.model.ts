import  { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:MysecretPassword@localhost:5432/clases?schema=public');

export const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
  },
);

console.log(User === sequelize.models.User); // true