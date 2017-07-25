import React, { Component } from 'react';
import $ from 'jquery';
export default class Product extends Component {
 
 constructor(){
    super();
    this.state ={
      product :[]
    }
 }
 componentWillMount() {
      this.setState({product: this.props.product});
  }
handleAddCart(e){
  let product=Object.assign(this.props.product);
  product["QTY"]=1;
  this.props.handleAddCart(product);
}
  render(){
    return(
          <li className="ProductList">
            <div className="ProductBlock">
              <img src="http://www.ikea.com/us/en/images/products/tullsta-chair-gray__55025_PE160027_S4.JPG"
               alt="product" width="100px" hegith="100px" /><br/>
                <h3><a href=""> {this.state.product.Name} </a></h3><br/>
                Price : ${this.state.product.Price} <br/>
                <input type="hidden" value={this.state.product.SKU} ref="txtSKU" />
                <button className="btn btn-primary btn-sm" onClick={this.handleAddCart.bind(this)} >Add to cart</button>
                <br/><br/>
              </div>
          </li>
    
    );

  }
}


