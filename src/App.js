import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Searchbar from './components/Searchbar.jsx';
import ProductTable from './components/ProductTable.jsx';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="App">
      <>
        <h1>IronStore</h1>
        <Searchbar
          input={input}
          setInput={setInput}
          checkbox={checkbox}
          setCheckbox={setCheckbox}
        />
        <ProductTable products={data} input={input} checkbox={checkbox} />
      </>
    </div>
  );
}

export default App;
