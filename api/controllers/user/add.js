module.exports = {


  friendlyName: 'Add',


  description: 'Add user.',


  inputs: {
    username: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    role: {
      type: 'string',
      required: false
    },
    email: {
      type: 'string',
      required: false
    }
  },


  exits: {
    success: {
      responseType: '',
      description: 'Added User Successful.'
    }
  },


  fn: async function (inputs) {

    var createdRecord = await User.create({ username: inputs.username, password: inputs.password, role: inputs.role, email: inputs.email }).fetch();
    if (createdRecord != {})
      return {
        status: 200,
        userCreated: createdRecord
      }

  }


};
