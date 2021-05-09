import React from 'react';
import "./ProductTable.css";

export default function ProductTable() {
    return (
        <div id="product-table" className="container px-0 mt-4">
            <div className="col">
                <div id="table-header" className="row">
                    <div className="col">Name</div>
                    <div className="col">Price</div>
                </div>            
            </div>            
        </div>
    )
}
