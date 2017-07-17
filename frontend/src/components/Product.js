import React, { Component } from 'react';
export default class Product extends Component {
  render(){
    return(
          <li>
            <div>
              <img src="http://assets.myntassets.com/assets/images/1445625/2016/7/26/11469516661643-Leading-Lady-Grey-Pack-of-2-Full-Coverage-Sports-Bras-3641469516661347-2.jpg"
               alt="product" width="100px" hegith="100px" />
              <div>
                <h3>
                  <a href=""> {this.props.product.Name} </a>
                </h3>
                <div>${this.props.product.Price}</div>
                <div>
                  <button className="btn btn-primary" >Add to cart</button>
                </div>
              </div>
            </div>
          </li>
    
    );

  }
}


