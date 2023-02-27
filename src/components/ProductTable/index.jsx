import ProductRow from "../ProductRow/index"
import './index.css'

const ProductTable = ({ products, ...restProps }) => {
    return (
        <table className="table table-dark">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
            </tr>
            {
                products.map((product, index_product) => (
                    <ProductRow
                        key={index_product}
                        {...product}
                    />
                ))
            }
        </table>
    )
}

export default ProductTable