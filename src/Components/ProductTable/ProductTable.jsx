import ProductRow from "../ProductRow/ProductRow"


const ProductTable = ({ data }) => {
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
                <ProductRow data={data} />
            </tbody>
        </table>
    )
}

export default ProductTable