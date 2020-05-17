module.exports = {


  friendlyName: 'Edit',


  description: 'Edit user.',


	inputs: {
		id: {
			type: 'string',
			required:true
		},
		username: {
			type: 'string',
			required:true
		},
		password: {
			type: 'string',
			required:true
		},
		role: {
			type: 'string',
			required:false
		},
		email: {
			type: 'string',
			required:false
		}
  },


	exits: {
		success: {
			responseType: 'redirect'
		},
		wrongID: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'wrongID'      
		}
  },


	fn: async function (inputs) {
		sails.log(inputs);
		var newRole = await Role.findOne({ id: inputs.role });

		await User.updateOne({ id: inputs.id })
			.set({
				username: inputs.username,
				password: inputs.password,
				role: newRole.id,
				email:inputs.email
			});
		
		
    // All done.
    return this.res.redirect("/user/view-list");

  }


};
