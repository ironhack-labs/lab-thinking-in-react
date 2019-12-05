import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="container search d-flex flex-column aling-center mb-4">
        <h2>Search</h2>
        <input
          type="text"
          className="input search-bar mb-3 p-2"
          placeholder="Search a product"
          onChange={e => this.props.findProducts(e)}
        />

        <div className="form-check">
          <input
            type="checkbox"
            name="stocked"
            id="stocked"
            className="form-check-input"
            value=""
            onChange={e => this.props.inStock(e)}
          />
          <label htmlFor="stocked" class="form-check-label">Only show products on stock</label>
        </div>

      </div>
    );
  }
}
