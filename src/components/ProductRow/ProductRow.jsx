function ProductRow({ products }) {

    return (
        <>
            {
                products.map(elm => {
                    return (
                        <>
                            <tr key={elm.id}>
                                <td style={{ color: !elm.inStock ? "red" : "black" }}>{elm.name}</td>
                                <td>{elm.price}</td>
                            </tr>
                        </>
                    )
                })
            }
        </>
    )
}


export default ProductRow