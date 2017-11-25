const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLNonNull, GraphQLList } = graphql
const rootQuery = require('./queries')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

  }
})

module.exports = new GraphQLSchema({
  query: rootQuery
})