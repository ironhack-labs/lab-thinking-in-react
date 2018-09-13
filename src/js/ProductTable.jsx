import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends Component {
    render() {
        const rowArr = [];
        let data = this.props.products;
        const searchText = this.props.searchText;
        const checked = this.props.checked;

        data.sort((a, b) => {
            if (a.category < b.category) return -1;
            if (a.category > b.category) return 1;
        });

        let category = null;

        data.forEach(product => {
            if (product.name.indexOf(searchText) === -1) {
                return;
            }
            if (checked && !product.stocked) {
                return;
            }

            if (product.category !== category) {
                rowArr.push(<ProductCategoryRow category={product.category} />);
            }
            rowArr.push(
                <ProductRow
                    name={product.name}
                    price={product.price}
                    key={product.name}
                    stocked={product.stocked}
                />
            );
            category = product.category;
        });

        return (
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>{rowArr}</tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;
