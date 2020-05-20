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
			responseType: ''
		},
		wrongID: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'wrongID'      
		},
		showList: {
			responseType:'redirect'
		}
  },


	fn: async function (inputs) {
		var newRole = await Role.findOne({ id: inputs.role });

		var userUpdated = await User.updateOne({ id: inputs.id })
			.set({
				username: inputs.username,
				password: inputs.password,
				role: newRole.id,
				email:inputs.email
			});
		
		if (userUpdated)
		{
			throw {
				showList : '/user/view-list'
			}
		} else
		{
			throw 'wrongID'
		}
  }


};
