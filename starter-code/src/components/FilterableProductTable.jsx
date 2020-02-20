import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  INIT_DATA = this.props.products;

  componentDidMount() {
    this.setState({
      products: this.INIT_DATA.data
    });
  }

  onchange = () => {
    //
  };
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}
