import React from 'react';
import data from './data.json';
import Main from './components/Main/Main';
import './App.css';

const appstyles = {
  border: "1px solid orange"
}
function App() {
  return (
    <div className="App" style={appstyles}>
      <h1>IronStore</h1>
      <Main {...data} />
    </div>
  );
}

export default App;
