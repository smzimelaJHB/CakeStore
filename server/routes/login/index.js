const express = require('express')
const router = require('express').Router()
const login = require('../../controller/login/');



module.exports = ()=> {
    router.get('/' , (req , res, next)=>{
        return res.render('login',{
            page: 'Login',
        })
    })


    router.post('/', login.find);
    //router.put('/resetpassword', login.resetPassword);

    // router.post('/' , (req , res, next)=>{
    //         if (err) throw err;
    //         return res.send(`Loged in!`,{
    //             page: 'Loged in',
    //         })
    //     })

    return router
}

