const mongoose = require("mongoose")
require('dotenv').config()
mongoose.connect("mongodb://rajendra0968jangid:KV4Dl3oLFrR3KG65@cluster0-shard-00-00.o6ae1.mongodb.net:27017,cluster0-shard-00-01.o6ae1.mongodb.net:27017,cluster0-shard-00-02.o6ae1.mongodb.net:27017/myfurniture?ssl=true&replicaSet=atlas-3hca2w-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0");
mongoose.connection.on('error', err => {
    logError(err);
});
mongoose.connection.on('connected', () => console.log('connected'));
const Connect = () => {
    try{
    }
    catch(err){
        console.log(err.message);   
    }
}

// module.exports = { Connect }