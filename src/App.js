import React, { Component } from "react";
import "./App.css";
import productsJson from "./data.json";
import DataElectronics from "./DataElectronics";
import DataSports from "./DataSports";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sport: [],
      electronic: [],
      search: ""
    };

    this._handleQuery = this._handleQuery.bind(this)
  }

  componentDidMount() {
    let filteredSport = productsJson.data.filter(el => el.category === "Sporting Goods")
    let filteredElectronics = productsJson.data.filter(el => el.category === "Electronics")
      this.setState(
        { sport: filteredSport, electronic: filteredElectronics }
      )
      
  }

  render() {
    const newMappedElectronics = this.state.electronic.filter((el) => el.name.toLowerCase().includes(this.state.search))
    const newMappedSports = this.state.sport.filter((el) => el.name.toLowerCase().includes(this.state.search))
    const mappedElectronicProducts = newMappedElectronics.map((el, index) =>
      <DataElectronics name={el.name} price={el.price} stocked={el.stocked} key={index} />
    );
    const mappedSportsProducts = newMappedSports.map((el, index) => (
      <DataSports name={el.name} price={el.price} stocked={el.stocked} key={index} />
    ));

    return (
      <div>
        <div className="search">
          <form>
            <input type="text" placeholder="Search..." onChange={event => this._handleQuery(event)} />
            <br />
            <input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox">Only show products in stock</label>
          </form>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <th>Sporting Goods</th>
            </tr>
            {mappedSportsProducts}
            <tr>
              <th>Electronics</th>
            </tr>
            {mappedElectronicProducts}
          </tbody>
        </table>
      </div>
    );
  }

  _handleQuery(event){
    this.setState({
      search:event.target.value.toLowerCase()
    })
  }
}

export default App;
