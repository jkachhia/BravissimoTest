import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import $ from 'jquery';
class App extends Component {
  

   constructor() {
    super();
    this.state = {
      cartProducts: []
    }
  }

  removeCartProduct(SKU){
  var newProducts;
  let that=this;
   $.ajax({
      type:'DELETE',
      url:'http://localhost:3005/api/cart/'+SKU,
      dataType: 'json',
      contentType: "application/json",
      cache: false,
      async: false,
      success: function (data) {
          that.setState({cartProducts: data});
      },
      error: function (jqXHR, status, err) {
        alert("Error"+status);
      }
    });  
  }
  updateCartProduct(product,QTY){
    let that=this;
    let newProduct=Object.assign(product);
    newProduct.QTY=QTY;
       $.ajax({
      type:'PUT',
      url:'http://localhost:3005/api/cart/'+product.SKU,
      dataType: 'json',
      contentType: "application/json",
      async: false,
      data: JSON.stringify(newProduct),
      success: function (data) {
          that.setState({cartProducts: data});
      },
      error: function (jqXHR, status, err) {
        alert("Error"+status);
      }
    });
  }
  addCartProduct(product){
    let that=this;
     $.ajax({
      type:'POST',
      url:'http://localhost:3005/api/cart',
      dataType: 'json',
      contentType: "application/json",
      data: JSON.stringify(product),
      success: function (data) {
        that.setState({cartProducts: data});
      },
      error: function (jqXHR, status, err) {
        console.log(err);
      }
    });
  }
  handleRemoveCart(SKU){
    this.removeCartProduct(SKU);
  }
  handleUpdateCart(product,QTY){
    this.updateCartProduct(product,QTY);
  }
  handleAddCart(product){
    this.addCartProduct(product);
  }
  getCartProducts() {
    let that=this;
    $.ajax({
      url:'http://localhost:3005/api/cart',
      dataType: 'json',
      type:'GET',
      cache: false,
      success: function (data) {
        that.setState({cartProducts: data});
      }.bind(this),
      error: function (jqXHR, status, err) {
        alert("Error"+status);
      }
    });
  }

  componentWillMount() {
    this.getCartProducts();
  }


  render() {
    return (
      <div>
        <center><h2>Shopping Cart</h2></center>
        <table className="ptable">
        <td width="70%">
          <ProductsContainer handleAddCart={this.handleAddCart.bind(this)} />
        </td>
        <td width="1px" className="vLine">&nbsp;</td>
        <td width="6px">
        &nbsp;&nbsp;&nbsp;
        </td>
        <td width="30%">
          <CartContainer cartProducts={this.state.cartProducts} handleUpdateCart={this.handleUpdateCart.bind(this)} handleRemoveCart={this.handleRemoveCart.bind(this)} />
         </td>
         </table>
      </div>
    );
  }
}

export default App;
