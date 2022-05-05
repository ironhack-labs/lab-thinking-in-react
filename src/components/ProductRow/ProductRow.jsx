import './ProductRow.css'

function ProductRow({ category, price, inStock, name, id }) {

    return (
        <>
            <td className={inStock === false ? "changeColor" : "normalColor"}>{name}</td>
            <td>{price}</td>
        </>
    )
}

export default ProductRow