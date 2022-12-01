import "./ProductsRow.css"

const ProductsRow = ({ products }) => {

    return (
        <div>
            {products.map(elm => {
                return (
                    <div key={elm.id} className="ProductRow">
                        <p className={!elm.inStock && "Red"}>{elm.name}</p>
                        <p>{elm.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductsRow