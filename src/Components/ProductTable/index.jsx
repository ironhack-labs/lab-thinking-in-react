/* eslint-disable react/prop-types */
import "../../App.css";

function ProductTable(props){
    return(
        <div id="table">
            <table id="info-table">
                <thead id="thead">
                    <tr id="titles">
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody id="parent-row">
                    {props.children}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable