const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

module.exports = new GraphQLObjectType({
  name: 'Device',
  fields: () => ({
    _id: { type: GraphQLID },
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
    city: { type: GraphQLString },
    district: { type: GraphQLString }
  })
})