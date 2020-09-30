import React, { Component } from 'react';

export default class SearchBar extends Component {
  /** */
  state = {
    srchKey: '',
    inStock: false,
  };

  /** */
  toggleChkBox = (evt) => {
    this.setState({ [evt.target.name]: evt.target.checked });
    this.props.srchMethod(this.state.srchKey, evt.target.checked);
  };

  /** */
  handleSrchInput = (evt) => {
    this.setState(
      { [evt.target.name]: evt.target.value },
      this.props.srchMethod(evt.target.value, this.state.inStock)
    );
  };

  //
  /** */
  render() {
    return (
      <div className="search-bar">
        <div>
          <label> Search </label>
          <input
            name="srchKey"
            type="text"
            value={this.state.srchKey}
            onChange={this.handleSrchInput}
          />
        </div>
        <br></br>
        <div>
          <input type="checkbox" name="inStock" onClick={this.toggleChkBox} />
          <label htmlFor="inStock"> Only show products on Stock </label>
        </div>
      </div>
    );
  }
}
