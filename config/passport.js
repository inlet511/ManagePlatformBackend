/* eslint-disable linebreak-style */
/* eslint-disable handle-callback-err */
/*
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt-nodejs');

// Serialize the User

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

// Deserialize the user
passport.deserializeUser((id, cb) => {
  User.findOne({ id }).exec((err, user) => {
    cb(err, user);
  });
});

// Local 
passport.use(new LocalStrategy({
	usernameField: 'username',
	passportField: 'password',
}), function (username, password, cb) {
		User.findOne({ username: username }).exec(function (err, user) {
			if (err) return cb(err);
			if (!user) return cb(null, false, { message: 'Username not found' });

			bcrypt.compare(password, user.password, function (err, res) {
				if (!res) return cb(null, false, { message: 'Invalid Password' });
				return cb(null, user, { message: 'Login Successful' });
			});
		});
})
*/