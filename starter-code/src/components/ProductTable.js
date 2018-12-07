import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    render() {
        let categories = Object.keys(this.props)
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
                     
                    {this.props[categ].map((e)=> <ProductRow products={e}/>)}
                        </React.Fragment>
                    })}


                </table>
            </div>
        )
    }
}
