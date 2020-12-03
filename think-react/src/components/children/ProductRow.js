
const ProductRow = ({product}) => {

    return (
        <tr>
            {product.stocked ? <td>{product.name}</td> : <td style={{color: "red"}}>{product.name}</td>}
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow