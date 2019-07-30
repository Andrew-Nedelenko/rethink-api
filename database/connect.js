
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
    db.query('CREATE TABLE IF NOT EXISTS categories (id SERIAL PRIMARY KEY NOT NULL, category_name VARCHAR (45) UNIQUE NOT NULL);'),
    db.query('CREATE TABLE IF NOT EXISTS article (id SERIAL PRIMARY KEY NOT NULL, title TEXT, description TEXT, category VARCHAR (45), FOREIGN KEY (category) REFERENCES categories(category_name) on delete cascade on update cascade)'),
    db.query('ALTER TABLE article ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP'),
  ]).catch(e => console.log(e, 'something went wrong'));
};

// qw();

module.exports = { db };
