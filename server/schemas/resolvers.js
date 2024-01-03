const { Contact } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
    Mutation: {
        createContact: async (parent, {name, email}) => {
            const contact = await Contact.create({name, email});
            const token = signToken(contact);
            return { token, contact }
        }

    }
}

module.exports = resolvers