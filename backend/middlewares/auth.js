const User= require('../models/user');
const jwt=require('jsonwebtoken')
require('dotenv').config();

exports.auth = (Role) => (req, res, next) => {
   const  token = req.cookies['token'];
    console.log('my token',token);
   if (token) {
     jwt.verify(token, process.env.JWT, async (err, decodedtoken) => {
       console.log(decodedtoken);
       if (!err && decodedtoken.role === Role) {
         res.currentUser = await User.findOne({ _id: decodedtoken.id})
         console.log('new user', res.currentUser)
         next();
       } else {
          res.clearCookie('token').json({isAuth: false, role: ''});
       }
     });
   } else {
     return res.status(400).json({isAuth: false, role: ''});
   }
  };

