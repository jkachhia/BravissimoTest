import React, {Component} from 'react';
import ProductsList from './components/ProductsList';
import $ from 'jquery';

export default class ProductsContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  getProducts() {
   /* $.ajax({
      url:'http://localhost:3005/api/product',
      dataType: 'json',
      type:'GET',
      cache: false,
      success: function (data) {
        alert(data);
        this.setState({products: data}, function () {
            console.log(this.state);
          });

      }.bind(this),
      error: function (jqXHR, status, err) {
        alert('Error'+this.url);
        console.log(err);
      }
    });*/
    this.setState({products:[
  {
    "SKU": "LN332",
    "Name": "Isla Bra",
    "Price": 29,
    "IMG_URL": ""
  },
  {
    "SKU": "LN336",
    "Name": "Nordic Rose Bra",
    "Price": 30,
    "IMG_URL": ""
  },
  {
    "SKU": "FY240",
    "Name": "Zentangle Bra",
    "Price": 34,
    "IMG_URL": ""
  },
  {
    "SKU": "PN112",
    "Name": "Clara Bra",
    "Price": 32,
    "IMG_URL": ""
  },
  {
    "SKU": "FY158",
    "Name": "Deco Delight Bra",
    "Price": 34,
    "IMG_URL": ""
  },
  {
    "SKU": "LN328",
    "Name": "Sienna Bra",
    "Price": 32,
    "IMG_URL": ""
  },
  {
    "SKU": "LN339",
    "Name": "Yellow Bra",
    "Price": 25,
    "IMG_URL": ""
  }
]});

  }

  componentWillMount() {
    this.getProducts();
    console.log(this.state.products);
  }

  render() {
    return (
      <div id="Products">
        <h2>Product List</h2>
        <ProductsList title="Products" products={this.state.products}/>
      </div>
    );
  }
}
