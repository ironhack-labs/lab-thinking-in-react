function ProductRow({ products }) {

    let stockColor

    return (
        <div>
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

                            (elm.inStock) ? stockColor = 'green' : stockColor = 'red'

                            const style = { color: stockColor }

                            return (
                                < tr style={style}>
                                    <td>{elm.name}</td>
                                    <td>{elm.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div >
    )
}

export default ProductRow