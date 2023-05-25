const ProductRow = ({ category, price, inStock, name, id }) => {

    const color = inStock ? 'black' : 'red'

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p style={{ "color": color }}>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default ProductRow