import ProductRow from "../ProductRow/ProductRow"

const ProductTable = ({products}) => {

    return (
        <table>
    <thead>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>

        {

        }
        <tr>
            <ProductRow products={products} />
        </tr>

    </tbody>
</table>
    )
}

export default ProductTable