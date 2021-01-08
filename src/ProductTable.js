import React from 'react';

import ProductRow from './ProductRow';

const ProductTable = (props) => {

    return (
        <div>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* accessing props passed down */}
                    {/* passing product data down to single table rows*/}
                    {props.products.map(product => {
                        return <ProductRow product={product} key={product.id} />
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default ProductTable;