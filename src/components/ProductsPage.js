import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
    const [products, setProducts] = useState(jsonData);
    const [productsToShow, setProductsToShow] = useState(products);

    const filterProduct = (filterQuery) => {
        console.log(filterQuery)
        const filteredProduct = products.filter((eachProduct) => {
            return eachProduct.name.toLocaleLowerCase().includes(filterQuery.toLocaleLowerCase())
        })
        setProductsToShow(filteredProduct)
    }

    const filteredByStock = products.filter((eachProduct) => {
        return eachProduct.inStock
    })

    const isProductOnStock = (event) => setProductsToShow(
        event.target.checked ? filteredByStock : products, console.log(event.target.checked)
    )

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar filterProduct={filterProduct}/>
            <label >Product on stock</label>
            <input type="checkbox" onChange={isProductOnStock}/>
            <ProductTable productsToShow={productsToShow}/>
        </div>
    )
}

export default ProductsPage