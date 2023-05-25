const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const {
  register,
  checkNewUser,
  updateUser,
  deleteUser,
  resendCode,
  login,
  forgotPassword,
  sendPassword,
  modifyPassword,
} = require("../controllers/users.controller");
const { isAuth } = require("../../middlewares/auth.midddleware")

const UserRoutes = express.Router()

UserRoutes.post("/register", upload.single("image"), register);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/login", login);
UserRoutes.post("/forgotpassword", forgotPassword);
UserRoutes.patch("/changepassword", [isAuth], modifyPassword);
UserRoutes.patch("/update/update", [isAuth], upload.single("image"), updateUser );
UserRoutes.delete("/:id", [isAuth] , deleteUser);

//?--------------------
//*---REDIRECT ROUTE 
//?--------------------

UserRoutes.get("/forgotpassword/sendpassword/:id", sendPassword)

module.exports = UserRoutes