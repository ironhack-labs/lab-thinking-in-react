const ProductsRow = ({ category, price, inStock, name, }) => {
    return (
        <div className="ProductsRow">
            <h2 style={{ color: inStock ? "black" : "red" }}>{name}</h2>
            <p>{price}</p>
        </div>

    )
}

export default ProductsRow