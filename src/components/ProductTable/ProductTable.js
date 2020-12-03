import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow'

export default class ProductTable extends Component {

    listFilter = () => {
        const products = this.props.products.data
        const query = this.props.query
        const inStock = this.props.inStock
        console.log(inStock)

        const filtered = products.filter( (product) => {
            return product.name.toLowerCase().includes(query.toLowerCase())
        })
        .filter( (product) => {
            if (inStock === true) {
                return product.stocked === true;
            } else {
                return true
            }
            

        })

        //console.log(filtered)

        return this.listCreator(filtered)
    }

    
    listCreator = (list) => {
        //console.log(list)
        //iterated over this.props.products and create a <ProductRow/> for each product in products 
        //const products = this.props.products.data
        return list.map( (product) => {
            //console.log(product.stocked)
            //return console.log(product.id, product.name, product.price)
            return <ProductRow 
                        key={product.id} 
                        name={product.name} 
                        price={product.price} 
                        inStock={product.stocked}
                    />  
        }) 
    } 


    render() {

        //console.log(this.props.query)

        return (

            <div>

                <h1>Product table</h1>
                
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stocked</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.listFilter()}
                        {/* {this.listCreator(this.props.products.data)} */}
                    </tbody>
                </table>
            </div>
        )
    }
}
