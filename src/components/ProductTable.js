import React from 'react';
import ProductRow from './ProductRow'

const ProductTable = ({ data }) => {
    return (
        <div>
            {
                data.map((product, i) => {
                    return (

                        <ProductRow
                            key={i}
                            name={data[i].name}
                            price={data[i].price}
                        />
                    );
                })
            }
        </div>
    )
}

export default ProductTable;

