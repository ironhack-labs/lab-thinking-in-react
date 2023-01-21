import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';




function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [filteredProducts, setFilteredProducts] = useState(jsonData);



    function handleFilterProduct(keyWord) {

        const filterProducts = products.filter((porduct) => {
            return porduct.name.toLocaleLowerCase().startsWith(keyWord.toLocaleLowerCase())
        })

        setFilteredProducts(filterProducts)

    }

    // THE CHECKBOX FILTER
    function handleCheckbox(inStock, keyWord) {

        const fiterOutOfStock = products.filter((product) => {
            return product.name.toLocaleLowerCase().startsWith(keyWord.toLocaleLowerCase())
        })


        const fiterInStock = products.filter((product) => {
            return product.inStock && product.name.toLocaleLowerCase().startsWith(keyWord.toLocaleLowerCase())
        })


        if (inStock) {
            setFilteredProducts(fiterInStock)
        } else {
            setFilteredProducts(fiterOutOfStock)
        }

    }


    return (
        <div className='main'>
            <h1>IronStore</h1>
            <SearchBar handleFilterProduct={handleFilterProduct} handleCheckbox={handleCheckbox} />
            <ProductTable products={filteredProducts} />
        </div>
    )
}

export default ProductsPage;