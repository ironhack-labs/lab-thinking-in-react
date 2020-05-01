import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      showStock: false,
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.checkBoxHandler = this.checkBoxHandler.bind(this);
  }

  searchHandler(e) {
    this.setState({ search: e.target.value });
  }

  checkBoxHandler(e) {
    console.log('no checked', e.target.checked);
    this.setState({
      showStock: e.target.checked,
    });
  }

  render() {
    let { showStock, search } = this.state;

    let { products } = this.props;

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          searchHandler={this.searchHandler}
          checkBoxHandler={this.checkBoxHandler}
        />
        <ProductTable>
          {products
            .filter((item) =>
              showStock
                ? item.name.toLowerCase().includes(search.toLowerCase()) &&
                  item.stocked
                : item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, idx) => (
              <ProductRow key={idx} {...item} />
            ))}
        </ProductTable>
      </div>
    );
  }
}
