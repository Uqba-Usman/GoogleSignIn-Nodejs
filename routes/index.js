var express = require("express");
var router = express.Router();
const passport = require("passport");
require("./passport-setup");

const isLoggedIn = (req, res, next) => {
  console.log("REQ USER: ", req);
  if (req.user) next();
  else res.status(401).send("Message");
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "You are not logged in" });
});

router.get("/failed", function (req, res, next) {
  res.render("fail");
});
router.get("/good", function (req, res, next) {
  res.render("good");
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/good");
  }
);

router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

module.exports = router;
