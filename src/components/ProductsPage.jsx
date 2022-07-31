import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

function ProductsPage () {

  const [products, setProducts] = useState(jsonData);

  console.log(products);

    return (
        <div>



<ProductTable data={products}/>


<SearchBar />

</div>
    )
}

 export default ProductsPage;