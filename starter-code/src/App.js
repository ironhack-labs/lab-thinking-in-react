import React, {Component} from "react";
import data from "./data.json";
import FilterableProductTable from "./components/FilterableProductTable.js";

import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">IronStore</h1>
            </div>
          </div>
        </section>
        <div className="container">
          <FilterableProductTable product={data} />
        </div>
      </div>
    );
  }
}

export default App;
