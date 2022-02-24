import ProductRow from "../ProductRow/ProductRow"

const ProductTable = ({ allData }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductRow allData={allData} />
            </tbody>
        </table>
    )
}

export default ProductTable