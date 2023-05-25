

function ProductTable({ products }) {


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
                    products.map(elm => {

                        return (
                            <tr key={elm.id}>

                                <td style={{ color: elm.inStock == true ? 'black' : 'red' }} >{elm.name}</td>

                                <td>{elm.price}</td>
                            </tr>

                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ProductTable