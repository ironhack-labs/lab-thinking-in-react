import React, { Component } from 'react'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
    //this.props.products - array con los datos
    //this.props.filtro - con el firltor d ususairo





    render() {
        let arrFiltrado = [...this.props.products.data]
        if (this.props.filtro) {
            arrFiltrado = this.props.products.data.filter(item =>{
                return item.name.includes(this.props.filtro)
            })

        }
         

        
        const allproducts = arrFiltrado.map(prod => <ProductRow key={prod.name} product={prod}/>
            )
        return (
            <table class="table is-striped is-narrow is-hoverable">
            <thead>
                <td>Name</td>
                <td>Price</td>

            </thead>
            <tbody>{allproducts}</tbody>
            
                
            </table>
        )
    }
}
