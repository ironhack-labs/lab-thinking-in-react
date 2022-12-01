import './ProductTable.css'
import ProductRow from '../ProductRow/ProductRow'

const ProductTable = () => {
    return (
        <section >
            <div className="ProductColumn">
                <h3>Name</h3>
                <h3>Price</h3>
            </div>
            <hr></hr>
            <div>
                <ProductRow />
                <hr></hr>
            </div>




        </section>
    )
}

export default ProductTable