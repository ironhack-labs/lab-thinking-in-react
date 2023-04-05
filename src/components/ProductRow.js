function ProductRow({product}){
    return(
        
            <tr key={product.id}>
                {
                    product.inStock
                    ?
                    <td>{product.name}</td>
                    :
                    <td style={{color: "red"}}>{product.name}</td>
                }
                <td>{product.price}</td>
            </tr> 
        
    )
}

export default ProductRow;