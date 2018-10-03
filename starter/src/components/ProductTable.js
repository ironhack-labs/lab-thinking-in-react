import React from 'react';
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'


export const ProductTable = ({ products }, { category }) => {

    let sportingGoods = products.filter(e => {
        return (e.category === 'Sporting Goods');
    })

    let Sports = sportingGoods.map((e, i) => {
        return (
            <ProductRow key={i} name={e.name} price={e.price} />
        )
    })

    let electronicGoods = products.filter(e => {
        return (e.category === 'Electronics');
    })

    let Electronics = electronicGoods.map((e, i) => {
        return (
            <ProductRow key={i} name={e.name} price={e.price} />
        )
    })

    let electronicsRow, sportsRow

    if (Electronics.length > 0) {
        electronicsRow = <ProductCategoryRow category={"Electronic"}></ProductCategoryRow>
    }

    if (Sports.length > 0) {
        sportsRow = <ProductCategoryRow category={"Sports"}></ProductCategoryRow>
    }

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


                {<ProductCategoryRow category={products.category} />}
                { sportsRow }
                {Sports}
                {electronicsRow}
                {Electronics} 
            </tbody>

        </table>
    )
}