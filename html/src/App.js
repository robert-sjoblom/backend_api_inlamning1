// @ts-nocheck
import React, { Component } from 'react';
import ProductForm from './addProductForm';
import './App.css';
import ProductList from './ProductList';

class App extends Component {
  state = {
    addProductIsVisible: true,
    listProductsIsVisible: false,
  }

  showProducts = () => {
    this.setState({
      addProductIsVisible: false,
      listProductsIsVisible: true
    });
  }

  addProducts = () => {
    this.setState({
      addProductIsVisible: true,
      listProductsIsVisible: false
    });
  }


  render() {
    return (
      <div className="container">
        <div className="d-flex mt-3">
          <button id="addProduct" className="btn btn-warning mr-4" onClick={this.addProducts}>Lägg till produkt</button>
          <button id="getProducts" className="btn btn-success mr-4" onClick={this.showProducts}>Hämta produkter</button>
        </div>
        <hr />
        {this.state.addProductIsVisible && <ProductForm />}
        {this.state.listProductsIsVisible && <ProductList />}
      </div>

    );
  }
}

export default App;
