import React from 'react';

class Product extends React.Component {
  state = {
    ...this.props.product
  }

  editName = () => {
    this.setState({ nameEdit: true })
  }

  editDesc = () => {
    this.setState({ descEdit: true })
  }

  save = () => {
    const data = { name: this.state.name, desc: this.state.desc };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.state), // body data type must match "Content-Type" header
    };

    this.setState({
      nameEdit: false,
      descEdit: false
    }, () => {
      fetch(`http://localhost:3001/api/products/${this.state.id}`, options)
    })
    console.log('TCL: Product -> id', this.state.id);


    // then send to server.
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  remove = e => {
    e.preventDefault();
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    fetch(`http://localhost:3001/api/products/${this.state.id}`, options)
      .then(this.props.del(this.state.id));
  }


  render() {
    const name = !this.state.nameEdit ?
      <h3 onClick={this.editName}>{this.state.name}</h3> :
      <React.Fragment>
        <input defaultValue={this.state.name} id="name" onChange={this.change} />
        <button onClick={this.save}>Save</button>
      </React.Fragment>;

    const desc = !this.state.descEdit ?
      <h3 onClick={this.editDesc}>{this.state.desc}</h3> :
      <React.Fragment>
        <input defaultValue={this.state.desc} id="desc" onChange={this.change} />
        <button onClick={this.save}>Save</button>
      </React.Fragment>

    return (
      <div>
        {name}
        {desc}
        <button onClick={this.remove}>Delete Product</button>
      </div>
    )
  }
}

export default Product;