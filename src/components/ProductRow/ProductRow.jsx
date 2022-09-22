
function ProductRow({ items }) {
    return (
        <>
            {items.map((item) => {
                return (
                    <tr key={item.id}>

                        <td style={item.inStock ? { color: "red" } : { color: "black" }}>{item.name}</td>
                        <td>{item.price}</td>

                    </tr>)

            })}

        </>)
}
export default ProductRow;










