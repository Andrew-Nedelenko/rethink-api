const dotenv = require('dotenv');
const path = require('path');

const root = path.join.bind(this, __dirname, '../');
dotenv.config({ path: root('.env') });

const url = process.env.URL;
const port = process.env.PORT;

module.exports = { url, port };
