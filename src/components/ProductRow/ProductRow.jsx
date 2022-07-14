function ProductRow({ product }) {

    return (
        <>
            <td className={product.inStock ? 'red' : 'white'}>{product.name}</td>
            <td className="white">{product.price}</td>
        </>
    )
}

export default ProductRow