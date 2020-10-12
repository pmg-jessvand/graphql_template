/**
 * The GraphQL queries
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    dummyItems:[DummyItem]
    dummyItem(id:ID): DummyItem
  }
`