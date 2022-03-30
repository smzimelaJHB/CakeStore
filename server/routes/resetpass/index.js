const express = require('express')
const router = require('express').Router()
const login = require('../../controller/resetpass/');



module.exports = ()=> {
    router.get('/' , (req , res, next)=>{
        return res.render('resetpass',{
            page: 'Reset Password',
        })
    })

    router.post('/', login.resetPassword);

    return router
}

