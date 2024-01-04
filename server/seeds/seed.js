const db = require('../config/connection');
const { Contact } = require('../models/Contact');
const cleanDB = require('./cleanDB')

const contactData = require('./contactData.json')
console.log(contactData)

db.once('open', async () => {
    // await cleanDB('Contact', 'contact');

    await db.collection('Contact').insertMany(contactData);

    console.log('Test contacts seeded!')
    process.exit(0);
})