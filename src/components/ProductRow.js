function ProductRow({ product }) {
    let style = {}
    if (!product.inStock) {
        style = {
            color: "red"
        }
    }

    return (
        <>
            <p style={style}>{product.name} {product.price}</p>
        </>
    )
}


export default ProductRow