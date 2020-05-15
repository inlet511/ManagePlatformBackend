module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


  inputs: {
    username:{
      type:'string',
      required: true
    },
    password:{
      type:'string',
      required:true
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

    await User.create({username:inputs.username,password:inputs.password,email:inputs.email});
    return this.res.redirect("/user/view-list");
    

  }


};
