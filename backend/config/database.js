require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  port: 3367
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado ao banco "+process.env.MYSQL_DATABASE)
  }).catch((error) => {
  console.log("Erro ao conectar com "+process.env.MYSQL_DATABASE, error)
})

module.exports = sequelize;
