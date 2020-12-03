const ProductRow = ({ name, price, stocked }) => {
    
    return (

        

        <>
            <tbody className="table">
                <tr>
                    <td style={!stocked ? { color: 'red' } : {}}>{name}</td>
                    <td>{price}</td>
                </tr>
            </tbody>
        </>
    )
}

export default ProductRow
