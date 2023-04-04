

function ProductRow({product}){
    return(
        
        {   product.inStock
                ? 
                <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr> 
                : 
                <tr>
                    <td style={{color: "red"}}>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
        }
        

    )
}

export default ProductRow;