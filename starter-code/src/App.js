import React from "react";
import data from "./data.json";
import FilterableProductTable from "./components/FilterableProductTable.js";
import SearchBar from "./components/SearchBar.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* data.data cat dans data.json on a un objet qui contient un tableau. 
        et ce qui nous intéresse c'est uniquement le tableau qui est dans cet objet.
        le clé du tableau s'appelle data, donc data(nom du fichier).data(clé du tableau) */}
        <FilterableProductTable products={data.data} />
      </div>
    );
  }
}

export default App;
