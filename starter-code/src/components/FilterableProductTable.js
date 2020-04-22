import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import '../App.css';

class FilterableProductTable extends Component {
  state = {
    'value': '',
    'checkbox': false, 
  }
  handleSearch = (e) => {
    this.setState({
      value: e
    })
  }

  handleCheckbox = (e) => {
    this.setState({
      checkbox: e
    })
  }
  render(){
    const {products} = this.props; 
    const { value,checkbox } = this.state;
    return(<div>
      <SearchBar searched={this.handleSearch} checkboxed={this.handleCheckbox} />
      <ProductTable products={products} productSearch={value} checked={checkbox}/>
    </div>)
  }
}

export default FilterableProductTable; 