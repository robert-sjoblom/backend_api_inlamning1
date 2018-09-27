import React from 'react';

class ProductForm extends React.Component {

  submit = e => {
    e.preventDefault();
    console.log(e.target.productName.value);
    console.log(e.target.productDescription.value);
  }

  render() {
    return (
      <form id="addProductForm" className="pb-4" onSubmit={this.submit}>
        <h2 className="mb-4">Lägg till produkt med POST</h2>
        <div className="form-group">
          <input id="productName" name="productName" className="form-control" type="text" placeholder="Ange Produktnamn" required autoComplete="off" />
        </div>
        <div className="form-group">
          <textarea id="productDescription" name="productDescription" className="form-control" placeholder="Ange Produktbeskrivning" autoComplete="off" required></textarea>
        </div>
        <input id="formSubmitProduct" className="btn btn-secondary mb-3" type="submit"  value="Lägg till" />
        <hr />
      </form>
    )
  }
}

export default ProductForm;
