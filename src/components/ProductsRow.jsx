

const ProductsRow = ({ products }) => {
    const allProducts = products.products

    return (
        <div>
            {allProducts.map((product) => {
                return (
                    <div key={product.id} className="productRow">
                        <div>
                            {product.inStock ? <p className="available">{product.name}</p>
                                : <p className="notAvailable">{product.name}</p>}
                        </div>
                        <div>
                            <p>{product.price}</p>
                        </div>
                    </div>
                )
            })
            }
        </div>

    )
}

export default ProductsRow