require("dotenv").config();
const mongoose = require("mongoose");

connect()

async function connect(){
    try {
        await mongoose.connect(process.env.dbConnect);
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}