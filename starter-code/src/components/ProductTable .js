import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
    render() {
        let { data } = this.props;

        return (
            <table className="uk-container uk-container-small uk-table uk-table-divider">
                <thead>
                    <tr>
                        <td className="border-right border-bottom uk-text-capitalize uk-text-center background-color">Name</td>
                        <td className="border-bottom uk-text-capitalize uk-text-center background-color">Price</td>
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

