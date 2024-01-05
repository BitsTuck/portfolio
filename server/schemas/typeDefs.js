const typeDefs = `
type Contact {
    name: String!
    email: String!
}

type Query {
    contact(name: String, email: String): Contact
}

type Mutation {
    createContact(name: String!, email: String!): Contact
}`

module.exports = typeDefs