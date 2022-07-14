import { useState, React } from 'react';
import './App.css';
import jsonData from './data.json';
import ProductsPage from './components/ProductsPage';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';
import ProductRow from './components/ProductRow'


function App() {
  const [products, setProducts] = useState([...jsonData])
  const [pRow, setPRow] = useState([...jsonData])
  const [search, setSearch] = useState('')
  const [pTable, setPTable] = useState('')
  return (
    <div className="App">
      <ProductsPage 
        products={products}
        searchProp={search}
        pTableProp={pTable}
      />
      <ProductRow pRowProp={pRow}/>
      <SearchBar searchProp={setSearch}/>
      <ProductTable 
        pTableProp={setPTable}
        pRowProp={pRow}
      />
      
    </div>
  );
}

export default App;