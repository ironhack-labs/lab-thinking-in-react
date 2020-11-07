import React, {Component} from 'react';
import './ProductTable.css';
import ProductRow from '../ProductRow/ProductRow';

class ProductTable extends Component {

    displayRows = () => {
        return (
            this.props.products.map(product => {
                return (
                    <ProductRow
                    name={product.name}
                    price={product.price}
                    idKey={product.id}
                    stocked={product.stocked}
                    cat={product.category}
                    />
                )
            })
        )
    }

    render() {return(
        <div className='container is-max-desktop'>
        <table className='table custom-table'>
            <thead>
                <tr className='has-background-grey-lighter'>
                    <th className='has-text-grey-dark'>Name</th>
                    <th className='has-text-grey-dark'>Price</th>
                    <th className='has-text-grey-dark'>Category</th>
                </tr>
            </thead>
            <tbody>
                {this.displayRows()}
            </tbody>
        </table>
        </div>
    )}
}

export default ProductTable;