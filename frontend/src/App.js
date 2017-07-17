import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ProductsContainer />
        <CartContainer />
      </div>
    );
  }
}

export default App;
