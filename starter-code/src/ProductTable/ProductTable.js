import React from "react";
import ProductRow from "../ProductRow/ProductRow";


export default class ProductTable extends React.Component {

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    <tbody >
                        {this.props.payload.map(dat => (
                            <ProductRow  name={dat.name} price={dat.price}></ProductRow>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}