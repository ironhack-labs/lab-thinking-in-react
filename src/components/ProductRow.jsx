



function ProductRow(props) {
    const { category, price, inStock, name, id} = props.product
    const textColor = inStock ? 'grey' : 'tomato'

    return (
        <tr style={{color : textColor}}>
        <td> {name} </td>
        <td> {price} </td>
        </tr>
    );
}

export default ProductRow;