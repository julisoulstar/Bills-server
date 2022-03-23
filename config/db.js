const mongoose = require("mongoose");
require('dotenv').config({ path: 'variables.env' });

const connectDB = async ()=>{
try {

    await mongoose.connect(process.env.DB_MONGO, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
    })
    console.log("bd connect")
} catch (error) {
    console.log("falló", error)
    process.exit(1);
}
}

module.exports = connectDB