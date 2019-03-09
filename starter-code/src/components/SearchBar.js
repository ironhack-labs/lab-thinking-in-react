import React from "react";
import FilterableProductTable from "./FilterableProductTable";

class SearchBar extends React.Component {
  state = {
    input: "",
    isChecked: false
  };

  render() {
    return (
      <form className="search">
        <div className="control">
          <p>
            <input
              type="text"
              name="searchString"
              value={this.state.input}
              onChange={event => {
                this.setState({ input: event.target.value });
                this.props.onChange(this.state.input);
              }}
              placeholder="search"
            />
          </p>
          <div className="control">
            <input
              type="checkbox"
              onChange={() => {
                this.setState({ isChecked: this.state.isChecked });
              }}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
