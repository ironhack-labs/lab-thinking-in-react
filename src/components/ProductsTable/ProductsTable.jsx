import './ProductsTable.css';
import { useState } from 'react';
import ProductRow from '../ProductRow/ProductRow';

const ProductsTable = ({ products }) => {
    const [product, setProduct] = useState(products);
    return (
        <div className="ProductsTable">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((elm, index) => {
                        return (
                            <ProductRow key={index} elm={elm} />

                        );
                    })}
                </tbody>
            </table>
        </div >
    );
};

export default ProductsTable;