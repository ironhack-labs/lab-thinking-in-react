import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
    render() {
        let { data } = this.props;

        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {data.length ? data.map((product, index) =>
                        <tr key={index}>
                            <ProductRow product={product} />
                            <td>{product.price}</td>
                        </tr>
                    ) : ""}

                </tbody>
            </table>
        )
    }
}

export default ProductTable;