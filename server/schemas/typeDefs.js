const typeDefs = `
type Contact {
    name: String!
    email: String!
}

type Mutation {
    createContact(name: String!, email: String!)
}`

module.exports = typeDefs