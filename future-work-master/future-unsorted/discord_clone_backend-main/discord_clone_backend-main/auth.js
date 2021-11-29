// external routes
const jwt = require('jsonwebtoken');
const bearerToken = require("express-bearer-token");

//internal routes
const { User } = require('./db/models');
const { secret, expiresIn } = require('./config').jwtConfig;


//function to create a user token
getUserToken = (user) => {
  const userData = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(
    { data: userData },
    secret,
    { expiresIn: parseInt(expiresIn, 10) }
  );

  return token;
};

//function to obtain information from token if still authorized
const restoreUser = (req, res, next) => {
  const { token } = req;

  if (!token) {
    return res.set("WWW-Authenticate", "Bearer").status(401).end();
  }

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 401;
      return next(err);
    }

    // console.log(jwtPayload.data)
    const { id } = jwtPayload.data;

    try {
      req.user = await User.findByPk(id);
    } catch (e) {
      return next(e);
    }

    if (!req.user) {
      return res.set("WWW-Authenticate", "Bearer").status(401).end();
    }

    return next();
  });
};


const requireAuth = [bearerToken(), restoreUser]

const userValidation = [bearerToken({ cookie: { signed: true, secret, key: "accessToken"} }), restoreUser]

module.exports = { getUserToken, requireAuth, userValidation };
