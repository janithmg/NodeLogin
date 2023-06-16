// -----------Custom libraries and modules---------------
const mongoose = require("mongoose");

// -----------Custom libraries and modules---------------
const Configs= require("../../../configs")

// -----------Custom libraries and modules---------------
const ConnectDatabase = async () =>{
    return await mongoose.connect(Configs.MONGO_DB_URL)
}

module.exports = ConnectDatabase;