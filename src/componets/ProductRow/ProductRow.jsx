const ProductRow = ({ products }) => {

    return (
        <div className="
        productRow">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td style={!product.inStock ? { color: 'Red' } : null}>{product.name}</td>
                                    <td>{product.price}</td>

                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ProductRow