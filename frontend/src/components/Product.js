import React, { Component } from 'react';
export default class Product extends Component {
  render(){
    return(
          <li>
            <div>
              <img src="https://www.bravissimo.com/products/ivy-bra-grey-floral-ln484gfa/"
               alt="product" />
              <div>
                <h3>
                  <a href=""> {this.props.product.Name} </a>
                </h3>
                <div>{this.props.product.Price}</div>
                <div>
                  <button >Add to cart</button>
                </div>
              </div>
            </div>
          </li>
    
    );

  }
}


