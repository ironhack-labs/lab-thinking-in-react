import React, { Component } from 'react';
import ProductRow from '../productRow/productRow'
import "./productTable.css";
import 'bulma/css/bulma.css'

class ProductTable extends Component {
    render() {
        return (
            <div>
                <table className="table is-fullwidth">
                    <thead className="table-head">
                        <tr>
                        <th classname="Column-Name">Name</th> 
                        <th classsname="Colums-Price">Price</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        <ProductRow products={this.props.products}/>  
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable
