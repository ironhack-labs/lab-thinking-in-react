import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {

    return (
        <table>
            <thead></thead>

            <tbody>                
                    {products.map(el =>
                        <ProductRow key={el.id} name={el.name} price={el.price} stocked={el.stocked} />
                    )}
            </tbody>
        </table>
    )
}

export default ProductTable;