import { useEffect, useState } from 'react';
import ProductsTable from '../ProductsTable/ProductsTable';
import SearchBar from '../Searchbar/Searchbar';
import jsonData from './../../data.json';

const ProductsPage = () => {

    const [products, setProducts] = useState([])
    const [shownProducts, setShownProducts] = useState(products)
    const [filterText, setFilterText] = useState("")


    useEffect(() => {
        setProducts(jsonData)
    }, [])



    return (
        <div>
            <h1>IronStore</h1>

            <SearchBar setShownProducts={setShownProducts} setFilterText={setFilterText} filterText={filterText} />
            <ProductsTable products={products} setProducts={setProducts} filterText={filterText} />

        </div>
    )
}

export default ProductsPage