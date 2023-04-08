const express = require("express");
const router = express.Router();
const signup = require("./router/signup");
const login = require("./router/login");
const addProducts = require("./router/addProducts");
const getProducts = require('./router/getProducts');
const productdelete = require('./router/productdelete');
const auth = require('./router/auth');
const updateProduct = require('./router/updateProduct');
const searchdata = require("./router/searchdata");

router.get("/",(req,res)=>{
    res.json({mgs:"hello",code:0});
})
router.get("/searchdata/:_id/:find",auth,searchdata,(req,res)=>{})


router.post("/signup",signup,(req,res)=>{
    res.json(req.mgs);
})

router.post("/login",login,(req,res)=>{
    res.json(req.mgs);
})

router.post("/addproduct",addProducts,(req,res)=>{});

router.post("/getproducts",auth,getProducts,(req,res)=>{});

router.delete('/productdelete',auth,productdelete,(req,res)=>{})

router.patch('/productupdate',auth,updateProduct,(req,res)=>{})



module.exports = router;