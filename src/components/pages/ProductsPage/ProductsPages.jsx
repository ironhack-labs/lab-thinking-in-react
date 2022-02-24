import ProductTable from "../../ProductTable/ProductTable";
import jsonData from './../../../data.json'
import { useState } from "react";


const ProductPage = () => {

    const [products, setProducts] = useState(jsonData)

    return (
        <div className="d-flex align-items-center flex-column justify-content-center">
            <h1 className="text-center">Iron Products</h1>
            <ProductTable products={products} />
        </div>
    )
}

export default ProductPage