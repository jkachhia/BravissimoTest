import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <table>
        <td width="80%">
          <ProductsContainer />
        </td>
        <td>
          <CartContainer />
          </td>
          </table>
      </div>
    );
  }
}

export default App;
