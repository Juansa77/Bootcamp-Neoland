const User = require("../api/models/user.model");
const dotenv = require("dotenv");
dotenv.config();

const isAuth = async (req, res, next) => {

    const token = req.headers.authorization?.replace("Bearer ", "")
};

const isAuthAdmin = async () => {};

module.exports = {
  isAuth,
  isAuthAdmin,
};
