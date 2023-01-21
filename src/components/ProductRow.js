
function ProductRow(props) {
    const {
        name, 
        price,
        inStock
    } = props.product

    // I could use a function to control the color but this 
    // function will be always running
    
    // function isAvailable(stock) {
    //     if (!stock) {
    //         return 'red'
    //     } else {
    //         return 'black'
    //     }
    // }
    return (
        <>
            <td style={{color: !inStock ? "red" : "black"}}>{name}</td>
            <td>{price}</td>
        </>
    )
}

export default ProductRow;