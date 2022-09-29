import {useState} from 'react'
import productData from '../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage(){

    const [products,setProducts] = useState(productData);
    const [filteredProducts,setFilteredProducts] = useState(productData);

    const handleSearch = (event) =>{
        const searchedProducts = products.filter((element) => {
           return element.name.includes(event.target.value); 
        })
        setFilteredProducts(searchedProducts)
    }

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar handleSearch={handleSearch}/>
            <ProductTable products={filteredProducts}/>
        </div>
    )
}

export default ProductsPage;