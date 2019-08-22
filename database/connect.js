
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

const qw = async () => {
  Promise.all([
    // db.query('CREATE TABLE IF NOT EXISTS categories (id SERIAL PRIMARY KEY NOT NULL, category_name VARCHAR (45) UNIQUE NOT NULL);'),
    db.query('CREATE TABLE IF NOT EXISTS article (id SERIAL PRIMARY KEY NOT NULL, title TEXT, description TEXT, link TEXT, category VARCHAR (45), created_at TIMESTAMP, updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (category) REFERENCES categories(category_name) on delete cascade on update cascade)'),
  ]).catch(e => console.log(e, 'something went wrong'));
};

// qw();

module.exports = { db };
