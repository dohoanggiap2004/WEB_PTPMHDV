const express = require("express");
const router = express.Router();
const {sequelize} = require("../config/sequelizeConnect");

router.get("/logout", async (req, res, next) => {

  try {
    const refreshToken = req.cookies.refreshToken;

    // Delete refresh token from the database
    const [
      results,
    ] = await sequelize.query("DELETE FROM refreshtokens WHERE token = ?",
        {
          replacements: [refreshToken],
        }
    )

    // Clear the refresh token from the cookies first
    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "Strict",
      secure: true, // Use secure only in production with HTTPS
    });
    res.clearCookie("accessToken", {
      httpOnly: true,
      sameSite: "Strict",
      secure: true, // Use secure only in production with HTTPS
    });

    if (results.affectedRows > 0) {
      res.status(200).json({
        mes: "Logout successfully",
      });
    } else {
      res.status(400).json({
        mes: "Logout failure",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mes: "Internal server error",
    });
  }

});

module.exports = router;
