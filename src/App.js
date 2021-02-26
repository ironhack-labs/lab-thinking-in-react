import React from "react";
import "./App.css";
import jsondata from "./data.json"
import FilterableProductTable from "./components/FilterableProductTable";
function App() {
  return (
    <div>
      <h1>IronStore</h1>
      <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}
export default App;