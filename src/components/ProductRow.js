
const ProductRow = ({ product }) => {

    const { name, category, price, inStock } = product

    function stockAvailable(inStock) {
        if (inStock === false) {
            return <td Style="color:red"> {name}</td>
        } else {
            return <td>{name}</td>
        }
    }

    return (
        <>
            {stockAvailable(inStock)}
            <td> {category}</td>
            <td>{price}</td>
        </>
    )
}
export default ProductRow