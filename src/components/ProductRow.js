const ProductRow = ({ product }) => {
    const { name, category, price } = product
    return (

        <>
            <td> {name}</td>
            <td> {category}</td>
            <td>{price}</td>
        </>
    )
}
export default ProductRow