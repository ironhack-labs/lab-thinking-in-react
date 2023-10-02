import productsData from '../../assets/data.json'
import { useState } from 'react';
import ProductTable from './product-table/ProductTable';
import SearchBar from  './search-bar/SearchBar'

function ProductsPage() {
    const [products, setProducts] = useState(productsData)

    const handleSearch = (search) => setProducts(productsData.filter((product) => product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))

    const handleAvailabilityCheck = () => setProducts(products.filter((product) => product.inStock));

    return (
    <div className='d-flex flex-column gap-4 p-3 m-3'>
        <div className='fs-1'>IronStore</div>
        <SearchBar onSearch={handleSearch} onAvailabilityCheck={handleAvailabilityCheck} />
        <ProductTable products={products} />
    </div>
    )
}

export default ProductsPage;
