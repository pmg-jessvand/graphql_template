/**
 * The Query Resolvers
 */

const dummyItems = require('../data/dummyItems');

module.exports = {
  Query: {
    dummyItems: () => dummyItems,
    // most useful is context & args
    // more information about the others can be found on
    // https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments
    dummyItem: (parent, { id }, context, info) => dummyItems.find((dummyItem) => dummyItem.id === id)
  }
}