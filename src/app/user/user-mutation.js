const { GraphQLNonNull, GraphQLString } = require('graphql')

const User = require('../graphql-schema/models/user-type')
const userService = require('./user-service')

module.exports = {
  login: {
    type: User,
    args: {
      username: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parent, args) {
      return userService.login(args)
    }
  },
  register: {
    type: User,
    args: {
      username: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parent, args) {
      return userService.register(args)
    }
  }
}