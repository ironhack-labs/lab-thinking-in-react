import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';

class FilterableProductTable extends Component {
  state = {
    searchWord: '',
    data: data.data,
  };

  onSearch = e => {
    let searchWord = this.state.searchWord;
    searchWord = e.currentTarget.value;
    this.setState ({searchWord});
  };

  getSortedList = () => {
    let searchWord = this.state.searchWord; //searchWord should come from parent , it not here
    let sorted = data.data;
    if (searchWord)
      sorted = this.state.data.filter (i =>
        i.name.toLowerCase ().startsWith (searchWord.toLowerCase ())
      );
    this.setState ({data: sorted});
  };

  // onCheckBox = () => {};

  render () {
    return (
      <React.Fragment>
        <h1>IronStore</h1>
        <h5>state of FilterableProductTable </h5>
        <pre>state: {JSON.stringify (this.state, '\t', 2)}</pre>

        <SearchBar
          handleSearch={this.onSearch}
          handleCheckBox={this.onCheckBox}
        />
        <ProductTable handleSort={this.getSortedList} />
      </React.Fragment>
    );
  }
}

export default FilterableProductTable;
