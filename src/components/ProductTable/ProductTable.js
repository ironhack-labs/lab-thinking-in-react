import React from 'react';
import ProductRow from '../ProductRow/ProductRow';
import "./ProductTable.css";

export default function ProductTable(props) {
    const { data } = props;    
    return (
        <div id="product-table" className="container px-0 mt-4">
            <div className="col">
                <div id="table-header" className="row">
                    <div className="col">Name</div>
                    <div className="col">Price</div>
                </div>
                {
                    data.map(product => {
                        return <ProductRow {...product} />
                    })
                }
            </div>
        </div>
    )
}
