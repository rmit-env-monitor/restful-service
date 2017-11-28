const { GraphQLObjectType } = require('graphql')

const userMutation = require('../user/user-mutation')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    
  })
})