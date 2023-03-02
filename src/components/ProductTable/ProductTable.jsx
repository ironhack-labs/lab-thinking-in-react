import Table from 'react-bootstrap/Table';

const ProductTable = ({ products }) => {
    console.log(products)
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Names</th>
                    <th>Price</th>
                </tr>
            </thead>
            {products.map((elm, idx) => {

                const style = {
                    color: elm.inStock ? "" : 'red'
                }
                return (
                    <tbody key={idx}>
                        <tr>
                            <td style={style}> {elm.name}</td>
                            <td>{elm.price}</td>
                        </tr>
                    </tbody>
                )
            })}
        </Table>
    )
}


export default ProductTable