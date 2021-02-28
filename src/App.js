import React from 'react';
import jsondata from './data.json';
class App extends React.Component {
  state = {
    products: jsondata.data,
    hideMe: true,
  };

  showProducts = () => {
    return this.state.products.map((eachProduct) => {
      return (
        <tr
          hidden={this.state.hideMe && !eachProduct.stocked}
          key={eachProduct.id}
          className={!eachProduct.stocked && 'noStock'}
        >
          <td>{eachProduct.name} </td>
          <td>{eachProduct.price}</td>
        </tr>
      );
    });
  };

  search = (e) => {
    console.log(e.target.value);
    let filteredCopy = jsondata.data.filter((eachProduct) => {
      return eachProduct.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    this.setState({ products: filteredCopy });
  };

  showStock = () => {
    console.log('clicked');
    let filteredCopy = jsondata.data.filter((eachProduct) => {
      return eachProduct.stocked;
    });

    this.setState({ products: filteredCopy });
  };

  render() {
    return (
      <div className="App">
        <label>
          Search:
          <input name="search" type="text" onChange={this.search} />
        </label>
        <label>
          Show only in stock
          <input
            type="checkbox"
            name="inStock"
            onChange={() => {
              this.setState({ hideMe: !this.state.hideMe });
            }}
          />
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
