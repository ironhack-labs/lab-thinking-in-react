import { useState } from 'react';
import jsonData from '../data.json'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [filteredProductArray, setFilteredProductArray] =useState(jsonData);
    const [search, setSearch] = useState('');

    return(

        <div>
            <h1>IronStore</h1>
            <SearchBar search={search} setSearch={setSearch} setFilteredProductArray= {setFilteredProductArray} products={products}/>
<ProductTable products={filteredProductArray} />


{/* {products.map((product) => {
return (
<div className="productListing">
<p> Category: {product.category} </p>
<p> Price: $ {product.price} </p>
<p> In Stock: {product.inStock} </p>
<p> Name: {product.name} </p>
<p> Id: {product.id}</p>
</div>)
})
} */}

        </div>
    )
}

export default ProductsPage;

