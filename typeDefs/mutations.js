/**
 * The GraphQL mutations
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    addDummyItem(dummyItem: DummyInput):[DummyItem]
  }
`