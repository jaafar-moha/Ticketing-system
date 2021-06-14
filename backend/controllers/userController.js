const express = require('express');
const User= require('../models/user');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register= async(req,res)=>{

    const {firstName,lastName,email,password,phone,department,role,state}=req.body;
     // Password Encryption
    const hashh= await bcrypt.hash(password, 10);
    
    const  user = new User({
     firstName,lastName,email,password:hashh,phone,department,role:role,state});
     user.save((err,user)=>{
         if(err){
             return res.status(400).send(err)
            }
            console.log(user)
    res.send({user})
    
    });
    }

exports.login=async (req,res)=>{

        const { email, password } = req.body;
         const user = await User.findOne({email: email}); 
        if(!user) {
            return res.status(400).json({
                error: 'User not found with this email, Please SignUp!'})
        }
        const isMatch =await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({msg: "Incorrect password."})
    
        const token = jwt.sign({ id:user._id, role: user.role,}, process.env.JWT);
        
        return res.status(200).cookie('token', token, {
          maxAge: 600000000,
          httpOnly: true,
        }).json({isAuth: true, role: user.role})

    }
    

exports.signout = (req, res) => {
    res.clearCookie('token');

    res.json({
        message: "User Signout"
    })

} 

exports.getAllUsers = async (req,res)=>{
    try {
        const users = await User.find();
        if(users) res.status(200).json(users);
    } catch (error) {
        res.status(400).send(error);
        
    }
}


    