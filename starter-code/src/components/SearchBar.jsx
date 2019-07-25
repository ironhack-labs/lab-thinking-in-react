import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      checkboxStock: false,
    }
  }
  updateSearchValue(event) {
    const {value} = event.target;
    this.setState({
      search: value,
    })
    this.props.filterData(value, this.state.checkboxStock);
  }
  
  updateCheckboxValue(event) {
    const newValue = event.target.checked;
    this.setState({
      checkboxStock: newValue,
    })
    this.props.filterData(this.state.search, newValue);
  }

  render() {
    return(
      <div className="search-bar">
      <h3>Search</h3>
      <input type="text" name="search" className="input-search" placeholder="Search..." value={this.state.search} onChange={(e) => this.updateSearchValue(e)}/>
      <div className="stock-checkbox">
        <input type="checkbox" name="filter" id="filter-checkbox" checked={this.state.checkboxStock}  onChange={(e) => this.updateCheckboxValue(e)}/>
        <label className="checkmark" htmlFor="filter-checkbox"></label>
        <label htmlFor="filter-checkbox">Only show products on stock</label>
      </div>
    </div>
    )
  }
}

export default SearchBar;
