import React, { Component } from 'react';
import Product from './Product';
export default class ProductsList extends Component {
  render() {
    return (
      <ul className="Products">
        {
          this.props.products.map(product=>{
            
            return (
              <Product product={product} />
              
            );
          })
        }
      </ul>       
    );
  }
}
