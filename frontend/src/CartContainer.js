import React, {Component} from 'react';
import CartList from './components/CartList';
export default class CartContainer extends Component {
constructor() {
    super();
    this.state = {
      products: []
    }
 }
 componentWillMount() {
  this.setState({products:this.props.cartProducts});
 }
 componentWillReceiveProps(nextProps){
  this.setState({'products':nextProps.cartProducts});
}

handleUpdateCart(product,QTY){
  this.props.handleUpdateCart(product,QTY);
}
handleRemoveCart(SKU) {
  this.props.handleRemoveCart(SKU);
}
render() {
  let totalPrice=this.state.products.map((product)=>product.QTY*product.Price).reduce((x,y)=>{return x+y},0);
  return (
    <div id="cart" className="cartContainer">
    <h2>Cart List</h2>
      <CartList title="Products" products={this.state.products} handleUpdateCart={this.handleUpdateCart.bind(this)} handleRemoveCart={this.handleRemoveCart.bind(this)}/>
      <div><strong>Total Price :{totalPrice}</strong></div>
    </div>
  );
}
}
