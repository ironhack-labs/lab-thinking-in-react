  

function ProductTable(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {props.products.map((element) =>{
                return(
                    <tr>
                        <td className={element.inStock ? '' : 'out-of-stock'}>{element.name}</td>
                        <td>{element.price}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default ProductTable;