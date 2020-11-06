const { Users } = require('../models')

module.exports = { 
    createUser: (args) => {
        const user = Users.create({
            email: args.userInput.email,
            name: args.userInput.name,
            password: args.userInput.password,
        });
        return user
    },
    users: () => Users.findAll(),
  }

