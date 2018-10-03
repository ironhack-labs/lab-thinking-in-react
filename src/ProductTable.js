import React from 'react';
import ProdcutRow from './ProductRow';
import ProcductCategoryRow from './ProductCategoryRow';

export default class ProductTable extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProcductCategoryRow></ProcductCategoryRow>
                    <ProdcutRow></ProdcutRow>
                </tbody>
            </table>
        )
    }
};