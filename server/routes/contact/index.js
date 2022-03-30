const router = require('express').Router()
const controller = require('../../controller/contact/');



module.exports = ()=> {
    router.get('/' , (req , res, next)=>{
        return res.render('contact',{
            page: 'Contact',
        })
    })

    router.post('/' , controller.contact);

    return router
}

