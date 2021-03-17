import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    name: '',
    inStockOnly: false,
  };

 handleChangeName = (e) => {
     const name = e.target.name;
     const value = e.target.value;
     console.log(name, value)
     this.setState({ [name]: value })
     this.props.filter(e.target.value)
 }

 handleChangeStock = (e) => {
    this.setState({ inStockOnly: e.target.checked })
    this.props.stockChange(e.target.checked)
}

  render() {
    return (
      <div>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={this.handleChangeName} value={this.state.name} type="text" name="name" />
          </div>
          <div>
            <label htmlFor="inStockOnly">In stock only</label>
            <input onChange={this.handleChangeStock} checked={this.state.inStockOnly} type="checkbox" name="inStockOnly" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
