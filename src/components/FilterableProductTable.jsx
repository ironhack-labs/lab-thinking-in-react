import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  state = {
    products: [],
    search: '',
  };

  componentDidMount = () => {
    this.setState({ products: this.props.products });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const filteredProducts = this.state.products.filter((el) => {
      return el.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    return (
      <div>
        <h1>IronStore</h1>
        <div>
          <SearchBar
            value={this.state.search}
            handlechange={this.handleChange}
          />
        </div>
        <div>
          <ProductTable products={filteredProducts} />
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
