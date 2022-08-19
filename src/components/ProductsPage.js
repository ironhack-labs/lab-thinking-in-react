import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

function ProductsPage () {
const [ products, setProducts ] = useState(jsonData)

let row = products.map((eachproduct) => {
    return  <div key={eachproduct.id} className='products'>
                {eachproduct.name}
                {eachproduct.price}
            </div>
})

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable />
            <ProductRow row={row}/>
        </div>
    )
}
export default ProductsPage;