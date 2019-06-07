import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ""
    };
  }

  handlerChange = (e) => {
    this.setState({searchString: e.target.value})
    this.props.filter(e.target.value)
  }

  render() {
    return (
      <form>
        <label>
          Search
          <br />
          <input type="text" value={this.state.searchString} onChange={this.handlerChange}/>
        </label>

        <br />

        <div className="row">
        <label className="col-md-11">Only show products on stock
          <input type="checkbox" />
        </label>
        </div>
      </form>
    );
  }
}
