import React, { Component } from 'react';
import Product from './Product';
import './productlist.css';

class ProductList extends Component {

  state = {
    "products": []
  }

  componentDidMount() {
    // fetch all products.
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(res => {
        console.log('TCL: ProductList -> componentDidMount -> res', res);
        this.setState({ products: res.products })
      })
  }

  del = id => {
    const newProducts = this.state.products.filter(prod => prod.id !== id)
    this.setState({ products: newProducts })
  }

  render() {
    const products = this.state.products.map(product => 
      <div className="child"  key={product.id}>
        <Product product={product} del={this.del}/>
      </div>)
    return (
      <div className="productlist">
        {products}
      </div>
      
    )
  }
}

export default ProductList;
