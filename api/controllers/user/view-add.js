module.exports = {


  friendlyName: 'View add',


  description: 'Display "Add" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/user/add'
    }
  },


  fn: async function () {
		var roles = await Role.find({});

    // Respond with view.
    return {roles:roles};

  }


};
