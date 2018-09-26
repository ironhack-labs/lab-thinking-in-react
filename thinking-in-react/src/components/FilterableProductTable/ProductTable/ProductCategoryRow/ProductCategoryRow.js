import React from 'react';
import './ProductCategoryRow.css';


const ProductCategoryRow = ({ category }) => (
    <tr>
        <td colSpan="2" className="category-name">
            { category }
        </td>
    </tr>
);

export default ProductCategoryRow;