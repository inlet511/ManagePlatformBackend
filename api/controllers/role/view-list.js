module.exports = {


  friendlyName: 'View list',


  description: 'Display "List" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/role/list'
    }

  },


  fn: async function () {

		var roles = await Role.find({});
    // Respond with view.
		return { roles: roles }

  }


};
