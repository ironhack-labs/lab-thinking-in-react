function ProductRow({products}){
    return(
        <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
            {products.map(product => {
            return(<tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>)
            })}
         </table>
    )
}

export default ProductRow