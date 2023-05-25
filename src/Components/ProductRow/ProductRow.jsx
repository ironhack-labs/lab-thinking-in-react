

const ProductRow = ({ name, price }) => {


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
                <tr>
                    <td>{name}</td>
                    <td>{price}</td>
                </tr>

            </tbody>
        </table>
    )

}

export default ProductRow