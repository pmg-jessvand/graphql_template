/**
 * The Subscription Resolvers
 */

const dummyItems = require('../data/dummyItems');
const pubsub = require('./pubsub');

module.exports = {
  Subscription: {
    dummyItemAdded: {
      subscribe: () => pubsub.asyncIterator("DUMMYITEM_ADDED")
    }
  }
}