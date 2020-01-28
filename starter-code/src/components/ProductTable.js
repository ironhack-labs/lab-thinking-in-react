import React, { Component } from 'react'
import ProductRow from '../components/ProductRow'

export default class ProductTable extends Component {
    render() {
/* Hier filtern wir die Daten auf basis des Searchstrings, den wir als Prop von der FilterableProductTable bekommen */
const filteredProducts=this.props.products.filter(oneProduct=>oneProduct.name.toLowerCase().includes(this.props.searchString.toLowerCase()))
const stockedProducts=this.props.products.filter(oneProduct=>{if(oneProduct.stocked){ return oneProduct}})
console.log(stockedProducts)
        return (
            <div id="productTable">
                <table >
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        
                {/* Hier werden die einzelnen Produkte an die Komponente übergeben damit die Liste erstellt wird */}
                {(!this.props.checkBox) ? filteredProducts.map((element,index)=>{return <ProductRow key={index} prod={element}/>}) : stockedProducts.map((element,index)=>{return <ProductRow key={index} prod={element}/>})}
                
                    </tbody>
                </table>
            </div>
        )
    }
}
