import { useState, useEffect } from 'react'
import ProductRow from '../ProductRow/ProductRow'
import './ProductsTable.css'

const ProductsTable = ({ productsData, filteredProducts }) => {

    console.log(filteredProducts)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productsData)
    }, [products])


    return (
        <section className='ProductsTable'>
            <div className='d-flex justify-content-around mb-3 bg-secondary py-3'>
                <h2>Name</h2>
                <h2>Price</h2>
            </div>
            {products?.map(elem => {
                return <ProductRow key={elem.id} product={elem} />
            })}
        </section>
    )
}

export default ProductsTable