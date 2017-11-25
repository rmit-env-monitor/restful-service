const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql

module.exports = new GraphQLObjectType({
  name: 'Nearby',
  fields: () => ({
    city: { type: GraphQLString },
    district: { type: GraphQLString },
    nearby: { type: new GraphQLList(GraphQLString) }
  })
})