module.exports = {


  friendlyName: 'Add',


  description: 'Add role.',


  inputs: {
    order: {
      type: 'number',
      required: true
    },
		name: {
			type: 'string',
			required:true
		}
  },


  exits: {
		success:{
				description:'Added a role successfuly'   
		},
		showRoles: {
			responseType:'redirect'
		}
  },


  fn: async function (inputs) {
		var roleCreated = await Role.create({name:inputs.name,order:inputs.order}).fetch();
		if (roleCreated)
			throw {
				showRoles:'/role/view-list'
			}
  }


};
