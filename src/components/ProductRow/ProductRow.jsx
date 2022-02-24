

const ProductRow = ({ name, price, inStock }) => {

    return (
        <>
            {inStock ? <td>{name}</td> : <td style={{ color: 'red' }}>{name}</td>}
            <td>{price}</td>
        </>
    )

    // if (!inStock) {
    //     return (
    //         <>
    //             <td style={{ color: 'red' }}>{name}</td>
    //             <td>{price}</td>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <td>{name}</td>
    //             <td>{price}</td>
    //         </>
    //     )
    // }


}

export default ProductRow