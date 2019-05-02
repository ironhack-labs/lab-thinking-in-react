import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      checkedItem: false
    }
  }

  findItem(e) {
    this.setState({
      ...this.state,
      itemName: e.target.value
    }, () => {
      this.props.searchItem(this.state)
    })
  }

  checkItems(e) {
    this.setState({
      ...this.state,
      checkedItem: e.target.checked
    }, () => {
      this.props.searchItem(this.state)
    })
  }

  render() {
    return (
      <div className="search-box">
        <h2>Search</h2>
        <input
          className="search"
          type="text"
          value={this.state.itemName}
          placeholder="Search product"
          onChange={(e) => this.findItem(e)}
        />
        <div className="check-box">
          <input
            type="checkbox"
            id="anyStock"
            onChange={(e) => this.checkItems(e)}
          />
          <label htmlFor="anyStock">Only show products on stock</label>
        </div>
      </div>
    )
  }
}

export default SearchBox;
