import React from 'react';
import './ProductRow.css';

function ProductRow(props) {
    return (
        <div >
        <table className="products-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}

export default ProductRow;
