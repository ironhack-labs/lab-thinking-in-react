import './App.css';
import ProductsPage from './components/ProductsPage';
import ProductTable from "./components/ProductTable"



function App() {

  return (
    <div className="App">
     <ProductsPage>

      <ProductTable/>

     </ProductsPage>


    </div>
  );
}
export default App;