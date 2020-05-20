module.exports = {


  friendlyName: 'Add',


  description: 'Add user.',


  inputs: {
    username: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    role: {
      type: 'string',
      required: false
    },
    email: {
      type: 'string',
      required: false
    }
  },


  exits: {
		success: {
			statusCode: 200,
			responseType: '',
			description: 'Added User Successful.'
		},
		redirect: {
			responseType: 'redirect'

		}
  },


  fn: async function (inputs) {

		var createdRecord = await User.create({ username: inputs.username, password: inputs.password, role: inputs.role, email: inputs.email }).fetch();
		if (createdRecord)
		{
			throw {redirect:'/user/view-list'};
		}
		return {}

  }


};
