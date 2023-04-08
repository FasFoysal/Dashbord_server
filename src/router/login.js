const signup = require('./../../db/signup');
const bcrypt = require('bcrypt');

const login = async(req,res,next)=>{
    const {email,password} = req.body;
    if(email && password){
        try {
            // find data
            let resData = await signup.find({email});
            if(resData.length){

            // bacword bcrypt
                let passwordCheck =await bcrypt.compare(password,resData[0].password);
                if(passwordCheck){
                    resData[0].password = null;
                    res.json({resData,code:0});
                }else{
                    res.json({mgs:"password not match",code:1});
                }
            }else{
                res.json({mgs:"You gave no account plz Signup",code:2});
            }
            
        } catch (error) {
            console.log(error);
        }
        // next()
    }else{
        res.json({mgs:"Plz fill up all the field",code:3})
    }
    
}

module.exports = login;

