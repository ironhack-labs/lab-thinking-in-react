function ProductRow({ product }) {
    return (
        <div>

            <li>
                <span>
                    {product.name} {product.price}
                </span>
            </li>
        </div>
    )

}

export default ProductRow