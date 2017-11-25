const { GraphQLNonNull, GraphQLString } = require('graphql')

const Nearby = require('../graphql-schema/models/nearby-type')
const nearbyService = require('./nearby-service')

module.exports = {
  getNearbyByCityDistrict: {
    type: Nearby,
    args: {
      city: {
        type: new GraphQLNonNull(GraphQLString)
      },
      district: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(parent, { city, district }) {
      return nearbyService.getNearbyRecord(city, district)
    }
  }
}