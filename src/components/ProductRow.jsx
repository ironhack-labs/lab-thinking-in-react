import "../App.css";

function ProductRow (props) {

    let redColor = ""
    if (props.inStock === false) {
    redColor = <td style={{color: 'red'}}> {props.name}</td>
    } else {
        redColor = <td>{props.name}</td>
    }
  
    return (
            <tr>
                <td>{redColor}</td>
                <td>{props.price}</td>
            </tr>

    )
}

export default ProductRow;