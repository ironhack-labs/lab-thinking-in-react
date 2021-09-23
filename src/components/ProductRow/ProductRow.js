import React, { Component } from 'react'
import jsondata from '../../data.json'



export default class ProductRow extends Component {

    constructor() {
        super()

        this.state = {
            data: jsondata.data,
            show: false,
            searchValue: ""
        }
    }

    displayProducts = () => {
        
        return this.state.data.map((product => {
            return (

                <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        }))
    }

   

    render() {

        return (
                <div>

                
                    {
                        this.displayProducts()
                    }
                </div>
                
               
            
        )
    }
}