import { useState } from 'react'
// import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../../components/ProductsPage/ProductTable/ProductTable'
import ProductRow from '../../components/ProductsPage/ProductTable/ProductRow/'
import Data from './../../data.json'

function ProductsPage() {

    const [products, setProducts] = useState();

    return (
        <div>
            {/* <SearchBar /> */}
            <ProductTable product={Data} />
            <ProductRow  />
        </div>
    )
}

export default ProductsPage