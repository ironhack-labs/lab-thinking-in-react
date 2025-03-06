function ProductRow ({product}) {
    return(
        <tr>
            <th>{product.name}</th>
            <th>{product.price}</th>
        </tr>
    )
}

export default ProductRow;