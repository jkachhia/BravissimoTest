import React, { Component } from 'react';
export default class Cart extends Component {

  constructor(){
    super();
     this.state = {
      cartProduct:[]
    }
  }

  handleRemoveCart(SKU){
     this.props.handleRemoveCart(SKU);
  }
  handleUpdateCart(product){
    if(this.refs.txtQTY.value!==this.state.cartProduct.QTY){
      this.props.handleUpdateCart(product,this.refs.txtQTY.value);
    }
  }
componentWillMount(){
      this.setState({'cartProduct':this.props.product});
 }
 componentWillReceiveProps(nextProps){
    this.setState({'cartProduct':nextProps.product});
    this.refs.txtQTY.value=nextProps.product.QTY;
 }
  validateNumber(e) {
    const re = /[0-9A-F:]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }
  onChangeQunatity(){
    if(this.refs.txtQTY.value>0){
        this.refs.updateBTN.className="btn btn-primary btn-xs";
        this.refs.updateBTN.disabled=false;
    }else{
       this.refs.updateBTN.className="btn btn-primary btn-xs disabled"; 
       this.refs.updateBTN.disabled=true;
    }
  }
  render(){
    return(
      
          <li>
            <div className="CartBlock">
              <img src="http://www.ikea.com/us/en/images/products/tullsta-chair-gray__55025_PE160027_S4.JPG"
               alt="product" width="40px" height="40px" />
              <div>
                <h5><a href=""> {this.props.product.Name} </a></h5>
                <input type="hidden" ref="txtPrice"  size="1" value={this.state.cartProduct.Price} />
                Price : <label ref="lblPrice">${this.state.cartProduct.Price*this.state.cartProduct.QTY}</label><br/>
                Qunatity : <input type="text" ref="txtQTY"  size="1" defaultValue={this.state.cartProduct.QTY} required maxLength="3" onKeyPress={(e) => this.validateNumber(e)} onChange={this.onChangeQunatity.bind(this)}  /><br/>
                <button ref="updateBTN" className="btn btn-primary btn-xs" onClick={this.handleUpdateCart.bind(this,this.state.cartProduct)} >Update</button>&nbsp;&nbsp;
                <button className="btn btn-primary btn-xs" onClick={this.handleRemoveCart.bind(this,this.state.cartProduct.SKU)} >Remove</button>
                 <br/><br/>
              </div>
            </div>
          </li>
    
    );

  }
}


