import React, {Component} from 'react';
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

class Table extends Component {
    render() {
        const rows = [];
        let previousCategory = '';
        let filter = this.props.filter.toLowerCase();
        let stockOnly = this.props.onlyStock;
        this.props.products.forEach(product => {
            if(product.name.toLowerCase().indexOf(filter) === -1) return;
            if(stockOnly && product.stocked === false) return;
            if (product.category !== previousCategory){
                rows.push(<ProductCategory category={product.category}/>)
            }
            rows.push(<ProductRow product={product}/>)
            previousCategory = product.category;
        }
        );
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;