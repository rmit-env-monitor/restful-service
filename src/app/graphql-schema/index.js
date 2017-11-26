const graphql = require('graphql')
const { GraphQLSchema } = graphql

const rootQuery = require('./queries')
const mutation = require('./mutations')

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation
})