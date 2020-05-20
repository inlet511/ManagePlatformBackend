module.exports = {


  friendlyName: 'Delete',


  description: 'Delete user.',


  inputs: {
	id: {
			type: 'string',
			required:true
		},
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
		var destroyed = await User.destroy({ id: inputs.id }).fetch();
		sails.log(destroyed);
		if (destroyed)
		{
			throw {showList:'view-list'}
		}
    // All done.
    return;

  }


};
