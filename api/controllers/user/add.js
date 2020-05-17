module.exports = {


  friendlyName: 'Add',


  description: 'Add user.',


  inputs: {
    username:{
      type:'string',
      required: true
    },
    password:{
      type:'string',
      required:true
		},
		role: {
			type: 'string',
			required:false
		},
    email:{
      type:'string',
      required:false
    }
  },


  exits: {
    success:{
      responseType:'redirect'      
    }
  },


  fn: async function (inputs) {

    await User.create({username:inputs.username,password:inputs.password,role:inputs.role,email:inputs.email});
    return this.res.redirect("/user/view-list");
    
  }


};
