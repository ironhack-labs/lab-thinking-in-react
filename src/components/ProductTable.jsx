import React from 'react';
import ProductRow from "../components/ProductRow"

class ProductTable extends React.Component {
render() {
    return (
        <table> 
            <tr>
                <th> Name</th> 
                <th> Price </th> 
                </tr> 
            {this.props.products.map(element => {
                return (<ProductRow product = {element} />) 
            })}           
        </table>
    )}
}

export default ProductTable