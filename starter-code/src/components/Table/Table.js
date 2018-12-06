import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          id="myInput"
         
          placeholder="Search for names.."
        />

        <table id="myTable">
        <thead>
          <tr className="header">
            <th >Name</th>
            <th >Price</th>
          </tr>
          <tr >
            <th >Sporting Goods</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbkop</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>UK</td>
          </tr>
         
          </tbody>
          <thead>
              <tr>
                  <th>Electronics</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <td>Alfreds Futterkiste</td>
            <td>Germany</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
