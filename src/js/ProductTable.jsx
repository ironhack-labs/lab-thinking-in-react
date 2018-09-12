import React, { Component } from 'react';
import Category from './ProductCategoryRow';


const ProductTable = props => {

    return (
        <div className="Table">
            <table>
                <tbody>
                    <tr>
                        <td>className</td>
                        <td>Price</td>
                    </tr>
                </tbody>

            </table>

            {props.categories.map((category, index) => {
                let productsFiltered = props.products.filter(item => item.category === category);
                return <Category key={index} category={category} products={productsFiltered} />
            })}

        </div>


    )
}


export default ProductTable