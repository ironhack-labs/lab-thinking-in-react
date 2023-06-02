import "../App.css";

function ProductRow (props) {

    let redColor = ""
    if (props.inStock === false) {
    redColor = <td style={{color: 'red'}}> {props.name}</td>
    } else {
        redColor = <td>{props.name}</td>
    }
  
    return (
        <div>
            <tbody>
                <tr>
                {redColor}
                <td>{props.price}</td>
                </tr>

            </tbody>
          

        </div>
    )
}

export default ProductRow;