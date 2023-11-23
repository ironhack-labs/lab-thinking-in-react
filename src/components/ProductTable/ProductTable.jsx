import ProductRow from "../ProductRow/ProductRow"
import './ProductTable.css'
const ProductTable = ({ products }) => {
    return (
        <div >

            <div className="ProductTable">

                <div className="name col-6 ">
                    <h5>Name</h5>
                </div>
                <div className="price col-6">
                    <h5>Price</h5>
                </div>
            </div>

            <ProductRow products={products} />
        </div>
    )
}

export default ProductTable