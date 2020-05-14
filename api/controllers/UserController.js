/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
	list: function (req, res) {
		User.find({}).exec(function (err, users) {
			if (err) {
				res.send(500, { error: 'Database Error' });
			}

			res.view('user/list', { users: users });
		});
	},

	add: function (req, res) {
		res.view('user/add');
	},

	create: function (req, res) {
		var name = req.body.name;
		var pwd = req.body.pwd

		User.create({ name: name, pwd: pwd }).exec(function (err) {
			if (err) {
				res.send(500, { error: 'Database error' });
			}
			res.redirect('/user/list');
		});
	}


};

