const typeDefs = `
type Contact {
    name: String!
    email: String!
    message: String!
}

type Query {
    name: [Contact]
    email: [Contact]
    message: [Contact]
}

type Mutation {
    createContact(name: String!, email: String!, message: String!): Contact
}`

module.exports = typeDefs