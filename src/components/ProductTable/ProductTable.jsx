import ProductRow from "../ProductRow/ProductRow"

const ProductTable = ({ products }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => <ProductRow key={product.id} {...product} />)
                }
            </tbody>

        </table>
    )
}

export default ProductTable