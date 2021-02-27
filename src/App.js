import React from 'react';
import jsondata from './data.json';
class App extends React.Component {
  state = {
    products: jsondata.data,
  };

  showProducts = () => {
    return this.state.products.map((eachProduct) => {
      return (
        <tr>
          <td>{eachProduct.name} </td>
          <td>{eachProduct.price}</td>
        </tr>
      );
    });
  };

  search = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="App">
        <label>
          Search:
          <input name="search" type="text" onChange={this.search} />
        </label>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>
          <tbody>{this.showProducts()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
