
import "./ProductsPage.css"
import { useState } from 'react';
import jsonData from '../../data.json'
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

function ProductsPage() {

    const [products, setProducts] = useState(jsonData);
    const [moviesBackup, setMoviesBackup] = useState(jsonData)

    const filterProducts = (query) => {
        console.log(query)
        const filteredProducts = moviesBackup.filter(elm => elm.name.includes(query))
        setProducts(filteredProducts)
    }


    return (
        <>
            <SearchBar filterProducts={filterProducts} />
            <ProductTable products={products} />
        </>)
}


export default ProductsPage