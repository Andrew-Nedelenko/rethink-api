const { db } = require('../database/connect');

const loginMiddleware = async (req, res, next) => {
  const { username, password, email } = req.body;
  const error = {};
  if (!String(username).trim()) {
    error.username = 'username is require';
  }
  if (!String(password).trim()) {
    error.password = 'password is require';
  }
  if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(String(email))) {
    error.email = 'invalid email';
  } else {
    // const candidate = await db.query(`SELECT * from rethinkusers WHERE email = ${email}`);
    // if (candidate) {
    //   error.email = 'email alredy exist';
    // }
  }
  if (Object.keys(error).length) {
    return res.status(400).json(error);
  }
  return next();
};

module.exports = { loginMiddleware };
