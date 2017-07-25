import React, { Component } from 'react';
import Cart from './Cart';

export default class CartList extends Component {

  constructor(){
    super();
     this.state = {
      cartProduct:[]
    }
  }
  handleRemoveCart(SKU){
    this.props.handleRemoveCart(SKU);
  }
 handleUpdateCart(SKU,QTY){
    this.props.handleUpdateCart(SKU,QTY);
 }
 componentWillMount(){
   this.setState({'cartProduct':this.props.products});
 }
componentWillReceiveProps(nextProps){
  this.setState({'cartProduct':nextProps.products});
}


 render() {
    return (
      <ul className="CartUL">
        {
          this.state.cartProduct.map(product=>{
            return (
              <Cart product={product} handleUpdateCart={this.handleUpdateCart.bind(this)} handleRemoveCart={this.handleRemoveCart.bind(this)} />
            );
          })
        }
      </ul>       
      
    );
  }
}
