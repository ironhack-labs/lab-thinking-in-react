import ProductTable from "../components/ProductTable/ProductTable"
import SearchBar from "../components/SearchBar/SearchBar"
import jsonData from './../data.json'
import { useState } from 'react'


function ProductsPage() {

    const [products, setProducts] = useState(jsonData)


    const loadProducts = (query) => {
        let copyProducts = [...products]
        copyProducts = products.filter((product) => product.name[0].toLowerCase() === query.toLowerCase())
        setProducts(copyProducts)
        console.log(copyProducts)

    }

    return (
        <div>
            <h1>IronStore</h1>

            <SearchBar handleSearchBar={loadProducts} />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>

                </tr>
                <ProductTable products={products} />
            </table>
        </div>
    )
}

export default ProductsPage