const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://bitstucker:p0rtfo1iOv1@cluster0.hvkzmuy.mongodb.net/')

module.exports = mongoose.connection