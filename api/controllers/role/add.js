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
					responseType:'redirect'      
				}
  },


  fn: async function (inputs) {
		await Role.create({name:inputs.name,order:inputs.order});
    return this.res.redirect("/role/view-list");
  }


};
