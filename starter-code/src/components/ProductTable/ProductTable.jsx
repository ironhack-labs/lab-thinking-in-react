import React from 'react'
import ProductRow from '../ProductRow/ProductRow';

export default class ProductTable extends React.Component {
    render() {
        return (
            <table className="table">
                <thead style={{ backgroundColor: "#E7ECEF" }}>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((elem, idx) => <ProductRow key={idx} {...elem} />)}
                </tbody>
            </table>
        )
    }
}