const route = require('express').Router();


const controller = require('../../controller/products/');
const services = require('../services/render');

////////////////////////////////////////////////////////////////////////////////
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/img/cakes')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
const upload = multer({ storage: storage })
///////////////////////////////////////////////////////////////////////

module.exports = ()=> {
    route.get('/none' , (req , res, next)=>{
        return res.render('login',{
            page: 'Login',
        })
    })

    /**
     *  @description Root Route
     *  @method GET /
     */
    route.get('/', services.homeRoutes);

    /**
     *  @description add products
     *  @method GET /add-product
     */
    route.get('/add_product' , (req , res, next)=>{
        return res.render('product/add_product.ejs',{
            page: 'add_product',
        })
    })

    /**
     *  @description for update product
     *  @method GET /update-product
     */
    route.get('/update_product', services.update_product);
    route.get('/delete_product', services.delete_product);

    // API
    route.post('/list',upload.single('imagep'),controller.create);
    route.get('/list', controller.find);
    //put request not working as intendend, problems with ajax
    route.put('/list/:id', controller.update);
    //using post method temporaly
    route.post('/list/:id', controller.delete);
    return route
}

