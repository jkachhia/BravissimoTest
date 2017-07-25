import React, { Component } from 'react';
import Product from './Product';
import $ from 'jquery';
export default class ProductsList extends Component {

  constructor(){
    super();
    this.state ={
      products :[]
    }
  }
  handleAddCart(newProducts){
     this.props.handleAddCart(newProducts);
  }

  
 getProducts() {
    $.ajax({
      url:'http://localhost:3005/api/product',
      dataType: 'json',
      type:'GET',
      cache: false,
      success: function (data) {
          this.setState({products: data});
      }.bind(this),
      error: function (jqXHR, status, err) {
        console.log(err);
      }
    });
 }

  componentWillMount() {
    this.getProducts();
    console.log(this.state.products);
  }

  render() {
    return (
      <ul className="ProductUL">
        {
          this.state.products.map(product=>{
            return (
              <Product product={product} handleAddCart={this.handleAddCart.bind(this)} />
            );
          })
        }
      </ul>       
    );
  }
}
