import ProductsTable from "../components/ProductsTable/ProductsTable"

import products from './../data.json'
const ProductsPage = () => {
    return (
        <div className="ProductsPage">
            <h2>IronStore</h2>
            <ProductsTable products={products} />
        </div>
    )
}

export default ProductsPage