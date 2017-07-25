module.exports ={
    product,products,getProducts,getProductByName,createProduct,deleteProductBySKU,getProductBySKU,updateProductBySKU
}
// Product Object
 function product(SKU, Name,Price,IMG_URL,QTY) {
    this.SKU=SKU;
    this.Name=Name;
    this.Price=Price;
    this.IMG_URL=IMG_URL;
    this.QTY=QTY;
}

// Existing Products Repository
var products = [];

// Get all products
function getProducts() {
    return products;
}

// Get a Prodct by SKU
function getProductBySKU(sku) {
    var filteredProducts = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].SKU.toUpperCase() == sku.toUpperCase()) {
            filteredProducts.push(products[i]);
            console.log(products[i]);
        }
    }
    if (filteredProducts.length != 0)
        return filteredProducts;
    else
        return invalidOperationException();
}
// Get a Product by name
function getProductByName(name) {
    var filteredProducts = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].Name.toUpperCase() === name.toUpperCase()) {
            filteredProducts.push(products[i]);
        }
    }
    if (filteredProducts.length != 0)
        return filteredProducts;
    else
        return invalidOperationException();
}

function createProduct(newProduct) {
    console.log(JSON.stringify(newProduct));
    var found=false;
    for (var i = 0; i < products.length; i++) {
        if (products[i].SKU.toUpperCase() == newProduct.SKU.toUpperCase()){
            products[i].QTY=parseInt(products[i].QTY)+1;
            found=true;
        }
    }

    if(!found){
          products.push(newProduct);
    }
    if (products.length != 0)
        return products;
    else {
        return invalidOperationException();
    }
}
// Update Product by SKU
function updateProductBySKU(sku,newProduct){
 for (var i = 0; i < products.length; i++) {
        if (products[i].SKU.toUpperCase() == sku.toUpperCase()){
              products[i].QTY=newProduct.QTY;
        }
    }
}

// Delete a Product by SKU
function deleteProductBySKU(sku) {
    try{
    for (var i = 0; i < products.length; i++) {
         console.log(products[i].SKU.toUpperCase() +'---'+sku.toUpperCase());
        if (products[i].SKU.toUpperCase() == sku.toUpperCase()){
              products.splice(i, 1);
        }
    }

    if (products.length != 0){
        return products;
    }
    else
        return invalidOperationException();
    }catch(e){
        console.log("Delete Error"+e);
    }
}

// Error Handler
function generateError(err, msg) {
    var error = new Error(msg);
    error.code = err;
    return error;
}
// Custom Exceptions
function invalidOperationException() {
    return generateError("400", "The specified Product does not exist");
}
