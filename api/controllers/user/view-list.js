module.exports = {


  friendlyName: 'List',


  description: 'List user.',


  inputs: {

  },


  exits: {
    success:{
      responseType: 'view',
      viewTemplatePath:'user/list'
    },
    noUser:{
      description:'No user found.',
      responseType:'noUser'
    }    
  },


  fn: async function (inputs) {

    var users = await User.find({});

    if(!users){throw 'noUser';}


    return{
      users:users
    };

  }


};
