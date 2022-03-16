const express = require('express');
const router = express.Router();


const getHome =(req,res)=>{
    res.json({message: "estan en la ruta Home"});
}

const getContact =(req,res)=>{
    res.json({message: "estan en la ruta contact"});
}

const getProfile =(req,res)=>{
    res.json({message: "estan en la ruta profile"});
}

const getSignin =(req,res)=>{
    res.json({message: "estan en la ruta signin"});
}

const getSignup =(req,res)=>{
    res.json({message: "estan en la ruta Signup"});
}

module.exports = {getHome,getContact,getProfile,getSignin,getSignup}