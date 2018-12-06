import React, { Component } from "react";


export default class Results extends Component {
  render() {
    return (
      <div>
          <thead>
        <tr>
          {/* <th>{this.props.filterReduce.category}</th> */}
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Germany</td>
          </tr>
        </tbody>
      </div>
    );
  }
}
