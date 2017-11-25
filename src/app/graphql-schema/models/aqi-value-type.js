const graphql = require('graphql')
const { GraphQLObjectType, GraphQLFloat } = graphql

module.exports = new GraphQLObjectType({
  name: 'AQIValue',
  fields: () => ({
    no2AQI: { type: GraphQLFloat },
    so2AQI: { type: GraphQLFloat },
    pm25AQI: { type: GraphQLFloat },
    pm10AQI: { type: GraphQLFloat },
    o3AQI: { type: GraphQLFloat },
    coAQI: { type: GraphQLFloat },
    aqi: { type: GraphQLFloat }
  })
})