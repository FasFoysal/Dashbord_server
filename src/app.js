// modules
const express = require("express");
const app = express();
const router = require("./router");
require('./../db/config');
const cors = require("cors");

// port
const PORT = process.env.PORT || 8000;
app.use(express.json());

app.use(cors({
    origin:"http://localhost:3000",
    methods:["*"]
    // GET","POST","PATCH
}))

// app use
app.use(router)

// port listen
app.listen(PORT,()=>{
    console.log(`app listen port is ${PORT}`);
})