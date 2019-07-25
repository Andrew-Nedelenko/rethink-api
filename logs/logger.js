const customLogger = (req, res, next) => {
  next();
  const rt = res.get('X-Response-Time');
  console.log(`\x1b[35m${req.method}\x1b[0m \x1b[36m${req.url}\x1b[0m - ${rt} - \x1b[35m${res.statusCode}\x1b[0m - \x1b[33mhostOrigin\x1b[0m -> \x1b[36m${req.headers.origin}\x1b[0m \x1b[33muserAgent\x1b[0m -> \x1b[36m${req.headers['user-agent']}\x1b[0m \n\x1b[2mcookies: ${req.headers.cookie ? JSON.stringify(req.headers.cookie) : 'no cookies'}\x1b[0m`);
};


module.exports = { customLogger };
