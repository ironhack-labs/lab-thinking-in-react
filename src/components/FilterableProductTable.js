import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      query: "",
      showCheckBox: false
    };
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    this.setState(() => ({
      [name]: value,
    }));
  }

  filterProducts() {
    return this.props.products.filter((product) => {
      return (
        (this.state.showCheckBox ? product.stocked : true) &&
        product.name.toLowerCase().includes(this.state.query.toLowerCase()) 
      );
    });
  }

  render() {
    const products = this.filterProducts();
    return (
      <div className="container">
        <SearchBar inputHandler={this.inputHandler} query={this.state.query} showCheckBox={this.state.showCheckBox}/>
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
