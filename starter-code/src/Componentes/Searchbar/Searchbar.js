import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Search</h3>
        <input type="text"
          placeholder="filter products"
          onChange={(e) => this.props.filterP(e)}
          //onChange={(e) => this.props.filterCheckAndText(e)}
          value={this.props.filterQuery}

        >
        </input>

        <input
          type="checkbox"
          onClick={(e) => this.props.checkFilter(e)}
        //onClick={(e) => this.props.filterCheckAndText(e)}

        ></input>
      </React.Fragment>
    )
  }
}
