import React from 'react';

class SearchBar extends React.Component {
  state = {
    onlyStock: false
  };

  handleChange = event => {
    const { value } = event.target;
    this.props.handleQuery(value);
  };

  handleCheckboxChange=event=>{
    const {checked}=event.target;
    this.props.handleCheck(checked);
  }

  render() {
    return (
      <div>
        <p>Search</p>
        <input
          type="text"
          name="query"
          value={this.props.query}
          onChange={this.handleChange}
        />
        <input type="checkbox" id="stock" onChange={this.handleCheckboxChange} checked={this.state.onlyStock}/>
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    );
  }
}

export default SearchBar;
