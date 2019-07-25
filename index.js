const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes/routes');
const { evrt: { port, url } } = require('./utils/config');
const { customLogger } = require('./logs/logger');

const app = express();

app.use(customLogger)
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(router);


app.listen(port, () => console.log(`Listen on http://${url}:${port}`));
