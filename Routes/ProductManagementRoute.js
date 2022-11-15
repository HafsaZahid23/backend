const express = require('express');
const Router = express.Router();

//Calling My Controllers

const { GetProductData, 
    ProductData,
    UpdateMyProductData,
    DeleteProductData
} = require('../controller/ProductManagementController');

//Calling My Middlewares

// const {Check} = require('../Middlewares/MeraPehlaMiddleware')

const {
    UploadProductImage
  } =  require('../middlewares/UploadMedia');

Router.post('/ProductData',UploadProductImage.array('ProductImage',10),ProductData);
Router.get('/GetProductData',GetProductData);
Router.post('/UpdateMyProductData',UpdateMyProductData);
Router.delete('/DeleteProductData',DeleteProductData);

module.exports = Router;