import React, { Component } from 'react';
import ProductRow from './ProductRow'; //for the out of stock products to be in red

/*export default function ProductTable(props) {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            <ProductRow
                            products={ props.products }
                            query={ props.query }
                            />
                    </tbody>
                </table>
            </div>
        )
    }*/

    class ProductTable extends Component {
    render() {
        return [
            <div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                   {this.props.data.data.map((product) => {
                       return (
                        <tr>
                        <td>Product name</td>
                        <td>Product price</td>
                        </tr>
                       );
                   })}
                </tbody>
            </table>
                <ProductRow />
            </div>
        ]
    }
}



    export default ProductTable