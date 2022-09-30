import {useState} from 'react'
import jsonData from './../data.json'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

const ProductsPage = () => {
    const [products,setProducts] = useState(jsonData)
    return (
        <div>
            <h1>Iron Store</h1>
            <SearchBar products={products} setProducts={setProducts}/>
            <ProductTable products={products}/>
        </div>
    )
}

export default ProductsPage