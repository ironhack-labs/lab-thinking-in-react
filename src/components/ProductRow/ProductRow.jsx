import "./ProductRow.css"
const ProductRow = ({ name, price, inStock }) => {

    return (
        <div className="ProductRow">
            <p className={!inStock ? 'red' : ""}>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default ProductRow