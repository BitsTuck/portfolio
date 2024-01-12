const {Schema, model} = require('mongoose');
const{ObjectId} = require('mongoose').Types;

const contactSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    message: {type: String, required: true}
})

const Contact = model('Contact', contactSchema);

module.exports = Contact;