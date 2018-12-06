import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import data from '../data.json'

export default class ProductTable extends Component {
    render() {
        const newJSON = {}
        data.data.forEach(e => {
            if (newJSON[e.category]) {
                newJSON[e.category].push(e);
            }
            else {
                newJSON[e.category] = [e]
            }
        });

        let categories = Object.keys(newJSON)
        return (
            <div>
                <table style={{ width: "50%" }}>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>

                    {categories.map(categ => {
                     return   <React.Fragment>
                     <ProductCategoryRow cat={categ}/>    
                    {newJSON[categ].map((e)=> <ProductRow products={e}/>)}
                        </React.Fragment>
                    })}


                </table>
            </div>
        )
    }
}
