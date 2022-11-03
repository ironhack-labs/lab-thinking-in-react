import { useState } from "react";
import jsonData from './../data.json'
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [state, setstate] = useState({
      query: '',
      list: []
    })

  return (
    <div className='productsPage'>
        <h1>ProductsPage</h1>
        <h1>IronStore</h1>
        
    <SearchBar products={products} queryState={state} setState={setstate}/>
    {/* using the params you can send components state data from the ba */}
    <ProductTable products={products} queryState={state} setState={setstate} />



    </div>
  )
}


export default ProductsPage;