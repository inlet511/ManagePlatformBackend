module.exports = {


  friendlyName: 'Add',


  description: 'Add role.',


  inputs: {
		name: {
			type: 'string',
			required:true
		}
  },


  exits: {
		success:{
					responseType:'redirect'      
				}
  },


  fn: async function (inputs) {
		await Role.create({name:inputs.name});
    return this.res.redirect("/role/view-list");
  }


};
