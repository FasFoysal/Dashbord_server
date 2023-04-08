// modules
const express = require("express");
const app = express();
const router = require("./router");
require('./../db/config');
const cors = require("cors");

// port
const port = process.env.PORT || 8000;
app.use(express.json());

app.use(cors({
    origin:"https://dashbord-products.onrender.com",
    methods:["*"]
    // GET","POST","PATCH
}))

// app use
app.use(router)

// port listen
app.listen(port,()=>{
    console.log(`app listen port is ${port}`);
})