import { useState, useEffect } from 'react'
import './ProductsPage.css'
import data from '../../data.json'
import ProductsTable from '../ProductsTable/ProductsTable'
import SearchBar from '../SearchBar/SearchBar'

const ProductsPage = () => {

    const [productsData, setProductsData] = useState([])
    const [productsDataCopy, setProductsDataCopy] = useState([])

    useEffect(() => {
        setProductsData(data)
        setProductsDataCopy(data)
    }, [productsDataCopy])

    const filterProducts = query => {
        if (query === '') {
            setProductsDataCopy(productsData)
        } else {
            const filteredProducts = productsData?.filter(elem => elem.name.startsWith(query))
            setProductsDataCopy(filteredProducts)
        }
    }

    return (
        <section className='ProductsPage'>
            <h1>IronStore</h1>
            <SearchBar filterProducts={filterProducts} />
            <hr />
            <ProductsTable productsData={productsData} filteredProducts={productsDataCopy} />
        </section>
    )
}

export default ProductsPage