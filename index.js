const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { router } = require('./routes/routes');
const { evrt: { port, url } } = require('./utils/config');

const app = express();

app.use(logger('dev'))
  .use(cors({
    origin: 'http://localhost:3300',
  }))
  .use(router);


app.listen(port, () => console.log(`Listen on http://${url}:${port}`));
