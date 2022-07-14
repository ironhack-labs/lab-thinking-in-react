const ProductRow = ({ products }) => {


    return (

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(({ id, name, price, inStock }) => {
                        return (
                            <tr key={id}>
                                <td style={{ color: inStock ? 'black' : 'red' }}>{name}</td>
                                <td>{price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table >
    )
}

export default ProductRow