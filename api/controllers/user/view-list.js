module.exports = {


  friendlyName: 'List',


  description: 'List user.',


  inputs: {

  },


  exits: {
    success:{
      responseType: 'view',
      viewTemplatePath:'pages/user/list'
    },
    noUser:{
      description:'No user found.',
      responseType:'noUser'
    }    
  },


  fn: async function (inputs) {

		var users = await User.find().populate('role');
		

    if(!users){throw 'noUser';}


    return{
      users:users
    };

  }


};
