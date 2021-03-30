const {
  GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'S2Cell',
  fields: () => ({
    id: { type: GraphQLString },
    level: { type: GraphQLInt },
    center_lat: { type: GraphQLFloat },
    center_lon: { type: GraphQLFloat },
    updated: { type: GraphQLInt },
  }),
})
