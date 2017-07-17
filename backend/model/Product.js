module.exports ={
    product,products,getProducts,getProductByName,createProduct,updateProductBySKU,deleteProductBySKU,getProductBySKU
}
// Product Object
 function product(SKU, Name,Price,IMG_URL) {
    this.SKU=SKU;
    this.Name=Name;
    this.Price=Price;
    this.IMG_URL=IMG_URL;
}

// Existing Products Repository
var products = [];

// Get all products
function getProducts() {
    return products;
}

// Get a product by SKU
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
    products.push(newProduct);
    
    if (products.length != 0)
        return newProduct;
    else {
        return invalidOperationException();
    }
}


// Delete a Product by SKU
function deleteProductBySKU(sku) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].SKU.toUpperCase() == sku.toUpperCase())
            products.splice(i, 1);
    }

    if (products.length != 0)
        return products;
    else
        return invalidOperationException();
}

// Update a Product by SKU
function updateProductBySKU(sku, updateProduct) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].SKU.toUpperCase() == sku.toUpperCase())
            products[i] = updateProduct;
    }

    if (products.length != 0)
        return updateProduct;
    else {
        return invalidOperationException();
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
