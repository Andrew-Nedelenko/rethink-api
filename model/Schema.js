const Sequelize = require('sequelize');
const {
  evrt: {
    dbname, dbuser, dbpass, dbhost,
  },
} = require('../utils/config');

const sequelize = new Sequelize(dbname, dbuser, dbpass, {
  host: dbhost,
  dialect: 'postgres',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const User = sequelize.define('users', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});


module.exports = {
  sequelize, User,
};
