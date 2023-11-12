import ProductRow from "./ProductRow";

function ProductTable(props) {
    return (
        <div>
            <p>Product Table</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product => {
                        return <ProductRow product={product} key={product.id} />
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default ProductTable;