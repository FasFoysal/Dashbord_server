const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const kittenSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
    type:String,
    minLength:4
    }
})

kittenSchema.pre('save',async function(next){
    try {
         this.password = await bcrypt.hash(this.password,8);
         next();
    } catch (error) {
        console.log(error)
    }
})

const signUp = mongoose.model("signup",kittenSchema);

module.exports = signUp; 