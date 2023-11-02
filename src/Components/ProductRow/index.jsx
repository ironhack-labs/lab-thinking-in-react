/* eslint-disable react/prop-types */
import "../../App.css";
function ProductRow(props){
    return(
        <tr id="table-row">
            <td className="row" style={props.products.inStock? {color:"black"} : {color:"red"}}>{props.products.name}</td>
            <td className="row">{props.products.price}</td>
        </tr>
    )
}

export default ProductRow