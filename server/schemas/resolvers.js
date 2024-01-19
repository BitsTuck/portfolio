const { Contact } = require('../models')
// const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Mutation: {
        createContact: async (parent, {name, email, message}) => {
            const contact = await Contact.create({name, email, message});
            // const token = signToken(contact);
            return { name, email, message }
        }

    },
}

module.exports = resolvers