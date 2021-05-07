import React, { Component } from 'react'

export default class ProductRow extends Component {



    render() {
            console.log(this.props.inStock)
         const filteredProducts = this.props.products.filter(product => { 
             return product.name.toLowerCase().includes(this.props.search.toLowerCase())
              && (this.props.inStock === true ? product.stocked === true : true)
        })
            
        const info = filteredProducts.map(product =>{

        return (
            
            <tr style={!product.stocked ? {color:"red"} : {color:"black"}}>
                <td >{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
            </tr>
        )
    })

    return (
        <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody >
                        {info}
                    </tbody>
                </table>
        </div>
    )
    }
    
}
