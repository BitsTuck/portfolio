const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://bitstucker:p0rtfo1iOv1@cluster0.hvkzmuy.mongodb.net/')

const db=mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})
module.exports = mongoose.connection