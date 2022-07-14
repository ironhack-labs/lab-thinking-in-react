import "./ProductRow.css"

const ProductRow = ({ product }) => {



    return (
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductRow