const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });
passport.serializeUser((user, done) => {
  console.log("Serialize User");
  console.log("Done", done);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("Unserialize User");
  console.log("Done", done);

  done(null, user);
  //   User.findById(id, (err, user) => {
  //     done(err, user);
  //   });
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "880987390955-tpj53bl08rs104mdjo7su97qfq807eqm.apps.googleusercontent.com",
      clientSecret: "tacK4239-Far9HKFgKYVXsg2",
      callbackURL: "http://localhost:3000/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("Access Token", accessToken);
      console.log("Refresh Token: ", refreshToken);
      console.log("Profile", profile);

      //use the profile info (mainly profile id) to check if the user is registeredin ur db
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
      //   });
    }
  )
); // After this function serialize function will call
