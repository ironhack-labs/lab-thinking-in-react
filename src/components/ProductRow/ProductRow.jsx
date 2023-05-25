
const ProductRow = ({products}) => {
    console.log(products)
    return (

        products.map((elm, i) => {
            const red = !elm.inStock ? 'red' : 'black'

            return (
                <tr>
                    <td style={{color:red}}>{elm.name}</td>
                    <td style={{color:red}}>{elm.price}</td>
                </tr>
            )
        })
        
        
    )
}

export default ProductRow