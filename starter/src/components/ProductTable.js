import React from 'react';
import {ProductCategoryRow} from './ProductCategoryRow'
import {ProductRow} from './ProductRow'


export const ProductTable = ({products}) => {
    console.log(products);
    
    return (
        <table>
            <tbody>
            <tr>
                <th>
                    <h4>name</h4>
                </th>
                <th>
                    <h4>price</h4>
                </th>
            </tr>
            
            <ProductCategoryRow category={products.data.category} />
            
            {
                products.data.map((e) => {
                    return <ProductRow name={e.name} price={e.price} />
                })
            }
            
            </tbody>    

        </table>
    )
} 