const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default:`https://source.unsplash.com/400x300/?products`
    }
})
productSchema.pre("save",async function(){
    try {
        this.img = `https://source.unsplash.com/400x300/?${this.name}`;
    } catch (error) {
        console.log(error);
    }
})

const product = mongoose.model("product",productSchema);

module.exports = product;