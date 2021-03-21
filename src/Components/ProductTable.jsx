import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Price
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {this.props.products_from_filteredproductstable.map((product) => {
                            return <ProductRow product_from_producttable={product}/>
                        })}



                    </tbody>

                </table>

            </div>
        )
    }
}

export default ProductTable;
