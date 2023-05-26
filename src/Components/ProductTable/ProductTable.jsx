import "./ProductTable.css"

const ProductTable = ({ products }) => {
    return (
        <table className="table" >
            <thead style={{ border: "2px solid black", display: "inline-block" }}>
                <tr>
                    <th >Name</th>

                </tr>
                <tr>
                    <th>Price</th>

                </tr>
            </thead>
            <tbody >

                {
                    products.map(({ id, name, price, inStock }) => {
                        let color
                        inStock ? color = { color: "black" } : color = { color: "red" }
                        return (
                            <tr key={id} >
                                <td style={color}>{name}</td>
                                <td>{price}</td>
                            </tr>
                        )
                    })}

            </tbody>
        </table>

    )
}




export default ProductTable