const express = require("express");
const passport = require("passport");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../config/dbConn");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../services/generateTokenService");
//controller
const AuthenticationController = require("../app//controllers/AuthenticationController");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    accessType: "offline", // Đảm bảo lấy refresh token
    prompt: "consent",
  })
);

router.get(
  "/auth/google/redirect",
  AuthenticationController.authenticateGoogle
);

router.get("/auth/google/failure", (req, res) => {
  res.send("Oops! Something went wrong. 😢");
});

// login local
router.post("/auth/login", AuthenticationController.authenticateLocal);

//login admin
router.post("/auth/admin/login", AuthenticationController.authenticateLocalAdmin);

module.exports = router;
