const express = require('express');
const { evrt: { port, url } } = require('./utils/config');
const { customLogger } = require('./logs/logger');

const app = express();

app.use(customLogger);

app.use('/', async (req, res) => {
  res.status(200).send({ hello: 'world' });
});

app.listen(port, url, () => console.log(`listen on http://${url}:${port}`));
