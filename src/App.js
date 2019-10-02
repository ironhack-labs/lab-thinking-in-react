import React, { Component } from 'react';
import { data } from './data.json';

class App extends Component {
  state = {
    data: data,
    filteredData: data,
    checked: false
  };

  showData = () => {
    return this.state.filteredData.map((each, i) => {
      if (!each.stocked && this.state.checked) {
        // eslint-disable-next-line array-callback-return
        return;
      }
      let style = {};
      if (!each.stocked) {
        style = { color: 'red' };
      }
      return (
        <tr key={i} style={style}>
          <td>{each.category}</td>
          <td>{each.price}</td>
          <td>{each.name}</td>
        </tr>
      );
    });
  };

  search = e => {
    let filteredData = this.state.data.filter(each => {
      return (
        each.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        each.category.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    this.setState({
      filteredData
    });
  };

  checkbox = e => {
    this.setState({
      checked: e.target.checked
    })
  };
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Search" onChange={this.search} />
        <input type="checkbox" onChange={this.checkbox} />
        <table>
          <tbody>{this.showData()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
