import "../App.css";

function ProductRow (props) {
    console.log('PROPS', props)
    return (
        <div>
            <tbody>
                <tr>
                <td>{props.name}</td>
                <td>{props.price}</td>
                </tr>

            </tbody>
          

        </div>
    )
}

export default ProductRow;