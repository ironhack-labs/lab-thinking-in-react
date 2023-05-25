import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable'
import ProductRow from '../ProductRow/ProductRow';


function ProductsPage({ data }) {
    const [products, setProducts] = useState(data);
    const [productsBackup, setProductssBackup] = useState(data);

    const filterListByName = query => {
        const filteredProducts = productsBackup.filter(elm => elm.name.toLowerCase().includes(query))
        setProducts(filteredProducts)
        console.log(filteredProducts)
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar filterListByName={filterListByName} data={data} />
            <ProductTable data={products} />
        </div>
    )
}
export default ProductsPage


