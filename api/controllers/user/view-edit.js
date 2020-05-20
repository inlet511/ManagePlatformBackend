module.exports = {


  friendlyName: 'View edit',


  description: 'Display "Edit" page.',


	inputs: {
		uid:{
      type:'string',
      required: true
    },
	},

  exits: {

		success: {
			responseType: 'view',
      viewTemplatePath: 'pages/user/edit'
		},
		 notFound: {
        description: 'No user with the specified ID was found in the database.',
        responseType: 'notFound'
      }

  },


	fn: async function ({ uid }) {

		var user = await User.findOne({ id: uid }).populate('role');
		if (!user) { throw 'notFound'; }

		var roles = await Role.find();
		// Respond with view.
		console.log(user);
		return {user:user,roles:roles};
		
  }


};
