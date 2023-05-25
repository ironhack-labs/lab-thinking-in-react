import './App.css';
import ProductsPage from './Components/ProductsPage/ProductsPage';
import jsonData from './data.json';


function App() {

  return (
    <div className="App">
      <ProductsPage data={jsonData} >

      </ProductsPage>
    </div>
  );
}

export default App;
