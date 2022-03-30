const express = require('express')
const router = require('express').Router()
const register = require('../../controller/register/');


module.exports = ()=> {
    router.get('/' , (req , res, next)=>{
        return res.status(200).render('register',{
            page: 'Register',
        })
    })

    router.post('/', register.create);

    // router.post('/' , (req , res, next)=>{
    //     return res.status(200).send("Registerd!");
    // })

    return router
}

