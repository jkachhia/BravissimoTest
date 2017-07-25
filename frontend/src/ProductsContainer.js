import React, {Component} from 'react';
import ProductsList from './components/ProductsList';
export default class ProductsContainer extends Component {

  
  handleAddCart(products){
    this.props.handleAddCart(products);
  }
  render() {
    return (
      <div id="Products" className="productContainer">
        <h2>Product List</h2>
        <ProductsList title="Products" handleAddCart={this.handleAddCart.bind(this)}/>
      </div>
    );
  }
}
