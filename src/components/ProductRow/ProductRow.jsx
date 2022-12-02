const ProductRow = ({ products }) => {

    return (
        products?.map((product) => {
            return (
                < tr key={product.id}>
                    <td style={product.inStock ? { color: 'green' } : { color: 'red' }}>{product.name}</td>
                    <td>{product.price}</td>
                </tr >
            )
        })
    )
}

export default ProductRow