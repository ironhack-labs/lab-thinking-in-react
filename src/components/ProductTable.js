import React, { Component } from 'react'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
    render() {
        let arrFiltrado =[...this.props.products.data]
        if(this.props.filtro){
             arrFiltrado = this.props.products.data.filter(item=>{
                return item.name.includes(this.props.filtro)
        })
       
        }

        const productos = arrFiltrado.map(prod => <ProductRow key={prod.name} product={prod}/>)
        return (
            <div className="productsTable">
                <table className="table">
                  <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {productos}
                </table>
            </div>
        )
    }
}
export default ProductTable
