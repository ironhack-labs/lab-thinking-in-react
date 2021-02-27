import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import jsondata from './data.json';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={jsondata.data} />
      </div>
    );
  }
}

export default App;
