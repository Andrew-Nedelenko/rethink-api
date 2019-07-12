
const { Client } = require('pg');
const {
  evrt: {
    dbhost, dbname, dbpass, dbuser,
  },
} = require('../utils/config');

const db = new Client({
  host: dbhost,
  user: dbuser,
  password: dbpass,
  database: dbname,
});

db.connect()
  .then(() => console.log('pg connected'))
  .catch(e => console.error('Connection failed...', e.stack));


module.exports = { db };
