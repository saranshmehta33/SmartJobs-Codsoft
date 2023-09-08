const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

    try{
        await mongoose.connect('mongodb+srv://saranshmehta33:tML5KaHBn40nCm8l@cluster0.1afuogw.mongodb.net/sheyjobs', {useNewUrlParser:true});
        console.log('Mongo DB Connection Success')
    }
    catch(error) {
        console.log('Mongo DB Connection Failed')
    }
}

module.exports = mongoose