import { useState } from 'react'
import ProductTable from '../../components/ProductTable/ProductTable'
import data from './../../data.json'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Container } from 'react-bootstrap'
import Checkbox from '../../components/Checkbox/Checkbox'

const ProductPage = () => {

    const [products, setProducts] = useState(data)
    const [productsBackUp, setBackUp] = useState(data)
    const [showStock, setShowStock] = useState(false)

    const handleSearchBar = e => {
        const filteredProducts = productsBackUp.filter(elm => elm.name.toLowerCase().includes(e.target.value))
        setProducts(filteredProducts)
    }

    const handleCheckbox = e => {
        const filteredProducts = productsBackUp.filter(elm => elm.inStock)
        !showStock && setProducts(filteredProducts)
        showStock && setProducts(productsBackUp)
        setShowStock(!showStock)

    }



    return (

        <Container className='mt-5'>
            <h1>IronStore</h1>
            <hr />
            <Checkbox handleCheckbox={handleCheckbox} showStock={showStock} />
            <SearchBar handleSearchBar={handleSearchBar} />
            <ProductTable products={products} />
        </Container>

    )
}

export default ProductPage