const Contact = require('../models/Contact');

module.exports = async (modelName, collectionName) => {
    try {
        const Model = Contact[modelName];
        if(!Model){
            throw new Error(`Model ${modelName} not found in Contact.`)
        }

        const collectionExists = await Model.collection.exists({ name: collectionName });
        if(collectionExists) {
            await Model.collection.dropCollection(collectionName);
        }

    } catch (err) {
        throw err;
    }
};