import React from 'react';
import ProductDetail from './ProductDetail';
import './ProductTable.css';
import { v4 as uuidv4 } from 'uuid';

export default function ProductTable(props) {
    console.log('this is in ProductTable',props)
    let products = props.products
    console.log('this is products in Product Table', products)


    const filtered = products.filter(product => {

        return product.name.toLowerCase().includes(props.query.toLowerCase()) 

    }).filter( product => {
        if (props.isInStore === true){
        return product.stocked === props.isInStore}
        else {
            return product
        }
    })

    return (   
        <div className="tableDiv">
        <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {filtered.map( product => {
                            return (<ProductDetail product={product} key={uuidv4()} />) })}

                            </tbody>
                
          </table>
</div>
            
       
    )
}
