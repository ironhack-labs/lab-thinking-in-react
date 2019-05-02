import React from 'react'

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
    }
  }

  findItem(e) {
    this.setState({
      ...this.state,
      itemName: e.target.value
    }, () => {
      this.props.searchItem(this.state.itemName)
    })
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <input
          type="text"
          value={this.state.itemName}
          placeholder="Search product"
          onChange={(e) => this.findItem(e)}
          />
        <input type="checkbox" id="anyStock"/>
        <label htmlFor="anyStock">Only show products on stock</label>
      </div>
    )
  }
}

export default SearchBox;
