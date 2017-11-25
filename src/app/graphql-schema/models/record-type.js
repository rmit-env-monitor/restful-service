const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat } = graphql

const AQIValue = require('./aqi-value-type')

module.exports = new GraphQLObjectType({
  name: 'Record',
  fields: () => ({
    _id: { type: GraphQLID },
    deviceID: { type: GraphQLID },
    utcDateTime: { type: GraphQLString },
    no2: { type: GraphQLFloat },
    so2: { type: GraphQLFloat },
    pm25: { type: GraphQLFloat },
    pm10: { type: GraphQLFloat },
    o3: { type: GraphQLFloat },
    co: { type: GraphQLFloat },
    sound: { type: GraphQLFloat },
    temperature: { type: GraphQLFloat },
    uv: { type: GraphQLFloat },
    humidity: { type: GraphQLFloat },
    aqiValues: { type: AQIValue }
  })
})