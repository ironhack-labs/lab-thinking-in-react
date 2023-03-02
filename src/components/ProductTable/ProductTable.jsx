import { useState } from 'react'
import ProductRow from '../ProductRow/ProductRow'
import SearchBar from '../SearchBar/SearchBar'
import allProducts from '../../data.json'

function ProductTable() {

    const [products, setProducts] = useState(allProducts)
    const [productsBackup, setProductsBackup] = useState(allProducts)


    const searchedKeyword = search => {
        const filteredProducts = productsBackup.filter(elm => elm.name.toLowerCase().includes(search.toLowerCase()))
        setProducts(filteredProducts)
    }

    return (
        <>
            <SearchBar searchedKeyword={searchedKeyword} />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductRow products={products} />
                </tbody>
            </table>
        </>
    )
}


export default ProductTable