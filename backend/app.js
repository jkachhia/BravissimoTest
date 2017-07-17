const fs=require('fs');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const productModel=require('./model/Product.js');
const cartModel=require('./model/Cart.js');
const LISTENING_PORT=3005;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var produtsDataFileName='./data/ProductData.json';
var cartDataFileName='./data/CartData.json';
// Load JSON file 
const productData =fs.readFileSync(produtsDataFileName);
const cartData =fs.readFileSync(cartDataFileName);
const products=JSON.parse(productData);
const cart=JSON.parse(cartData);

// Load Array of JSON
products.forEach(function(element) {
    productModel.createProduct(element);    
}, this);

cart.forEach(function(element) {
    cartModel.createProduct(element);    
}, this);


app.get("/",function(req,res){
    res.send("Please use /api/product ");
    
});
//Get all products
app.get("/api/product",function(req,res){
    success(res,productModel.getProducts());
    
});

//Get all carts
app.get("/api/cart",function(req,res){
    success(res,cartModel.getProducts());
    
});
// Get product By SKU
app.get("/api/product/:_SKU",function(req,res)
{
    var product=productModel.getProductBySKU(req.params._SKU);
    success(res,product);
    
});
// Get cart By SKU
app.get("/api/cart/:_SKU",function(req,res)
{
    var product=cartModel.getProductBySKU(req.params._SKU);
    success(res,product);
    
});
//Add product
app.post("/api/product",function(req,res){
    var product=req.body;
    productModel.createProduct(product);
    fs.writeFile(produtsDataFileName,JSON.stringify(productModel.getProducts(),null,2),function(err){
        console.error(err);
    })
    success(res,productModel.getProducts());
    
});
//Add cart
app.post("/api/cart",function(req,res){
    var product=req.body;
    cartModel.createProduct(product);
    fs.writeFile(cartDataFileName,JSON.stringify(cartModel.getProducts(),null,2),function(err){
        console.error(err);
    })
    success(res,cartModel.getProducts());
    
});
//Update Product by SKU
app.put("/api/product/:_SKU",function(req,res){
    var SKU=req.params._SKU;
    var product=req.body;
    productModel.updateProductBySKU(SKU,product);
    fs.writeFile(produtsDataFileName,JSON.stringify(productModel.getProducts(),null,2),function(err){
        console.error(err);
    })
    success(res,productModel.getProducts());
    
});

//Delete Product by SKU
app.delete("/api/product/:_SKU",function(req,res){
    var sku=req.params._SKU;
    productModel.deleteProductBySKU(sku);
    fs.writeFile(produtsDataFileName,JSON.stringify(productModel.getProducts(),null,2),function(err){
        console.error(err);
    })
    success(res,productModel.getProducts());
    
});
//Delete cart by SKU
app.delete("/api/cart/:_SKU",function(req,res){
    var sku=req.params._SKU;
    cartModel.deleteProductBySKU(sku);
    fs.writeFile(cartDataFileName,JSON.stringify(cartModel.getProducts(),null,2),function(err){
        console.error(err);
    })
    success(res,cartModel.getProducts());
    
});

// Success function
function success(response, data) {
    response.writeHead(200, {
        "Content-Type" : "application/json"
    });
    response.end(JSON.stringify(data));
    /*response.end(JSON.stringify({
        error : null,
        data : data
    }));*/
}

// Failure function
function failure(response, err) {
    response.writeHead(err.code, {
       "Content-Type" : "application/json"
    });
    response.end(JSON.stringify({
        error : err.code,
        message : err.message
    }));
}
app.listen(LISTENING_PORT,function(){console.log("listening "+LISTENING_PORT+" port...");});