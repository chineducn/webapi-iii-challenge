const userDb = require('../users/userDb')

function validateUserId(req, res, next) {
    const { id } = req.params;
    if (parseInt(id) >= 0) {
        userDb.getById
        .then(user => {
            if (user) {
                req.user = user
                next()
            }
            else {
                res
                .status(400)
                .json({
                    success: false,
                    message: "Invalid user id"
                })
            }
        })
        .catch(error => {
          res
            .status(500)
            .json({
                message: 'There was an error in connecting to the database',
                error
            })
        })
    }
    else {
      res
        .status(400)
        .json({
          success: false,
          message: "The id entered couldn't possibly be a valid number"
        })
    }
}

function validateUser(req, res, next) {
    if (!req.body) {
        res
            .status(400)
            .json({
                message: "Missing user data"
            })
    }
    if (!req.body.name) {
        res
            .status(400)
            .json({
                message: "Missing required name field"
            })
    }
    next()
}

function logger(req, res, next) {
    console.log(` A ${req.method} Request, from url "${req.url}" was made at ${new Date().toISOString()}`);
    next();
};
  
module.exports = {
    validateUserId: validateUserId,
    validateUser: validateUser,
    logger: logger,
}