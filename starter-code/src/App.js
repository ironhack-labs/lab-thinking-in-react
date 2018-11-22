import React, { Component } from "react";
import "./App.css";
import data from "./data.json";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataS: data.data
    };
  }

  
  componentWillMount() {
    let { dataS } = this.state;

    this.setState({ dataS });
  }
  filter(e) {
    this.setState({ filter: e.target.value });
  }
  checkProps(){
    if(this.props.stocked === false)
    return 
  }
  render() {
    let dataS = this.state.dataS;
    if (this.state.filter)
      dataS = dataS.filter(dataS =>
        dataS.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    console.log(dataS);

    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)} />
        <form>
          <p>

            <input
              type="checkbox"
              checked={this.props.stocked}
              onChange={this.handleInStockChange}
            />{" "}
            Only show products in stock
          </p>
        </form>

        {dataS.map(dataS => (
          <Datos key={dataS.name} datos={dataS} />
        ))}

        
      </div>
      
    );
  }
}

const Datos = props => (
  <table>
          <thead>
            <tr>
              
              <th>{props.datos.name}</th>
              <th>{props.datos.price}</th>
              <p>{props.datos.category}</p>
            </tr>
          </thead>
          
        </table>
);

export default App;
