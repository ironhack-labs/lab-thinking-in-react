import React, {Component} from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.search);

    return (
      <div className="section">
        <h2>Search</h2>
        <div className="control">
          <input
            className="input"
            onChange={event => {
              this.props.SearchWord(event);
            }}
            name="search"
            type="text"
            placeholder="search"
          />
        </div>
        <div className="control">
          <label className="label">
            <input
              onChange={event => {
                this.props.FilterProducts(event);
              }}
              name="check"
              type="checkbox"
            />
            Only show products on stock
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
