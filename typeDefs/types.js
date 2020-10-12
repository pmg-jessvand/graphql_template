/**
 * The GraphQL types
 */

const  { gql } = require('apollo-server');

module.exports = gql`
  scalar Date

  enum Status {
    READ,
    INTERESTED,
    NEVER_READ
  }

  type DummyItem {
    id: ID!
    #authors: [Author]! Valid [], [...author data]
    #authors: [Author!] [...author data]
    status: Status
    title: String
    releaseDate: Date
  }
`