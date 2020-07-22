import React, { Component } from 'react'
import ProductRow from './ProductRow'

export class ProductTable extends Component {

    //yhis.props.products>>>aray cpm los dato
    //this.props.filtro>>> con el filtro ddel usuario 



    render() {
        console.log(this.props.products)
        //copiar el array 
        //filtrar el array 
        console.log("FILTROO",this.props.filtro)
        console.log("stockKK",this.props.stock)
        
        let arrFiltrado = [...this.props.products.data]
        if (this.props.filtro) {
            if (this.props.stock) {
                arrFiltrado = this.props.products.data.filter(item => {
                    return item.name.toLowerCase().includes(this.props.filtro) && item.stocked === true
                })
            } else {
                arrFiltrado = this.props.products.data.filter(item => {
                    return item.name.toLowerCase().includes(this.props.filtro)
                })
            }
        } else {
            if (this.props.stock) {
                arrFiltrado = this.props.products.data.filter(item => {
                    return item.stocked === true
                })
            }
        }

        let categories = {}

        const listadoProducts = arrFiltrado.map(product => {
            if (product.category in categories) {
                return <div>
                    <ProductRow key={product.name} product={product} />
                </div>

            }
            else {
                categories[product.category] = true
                return <div>
                    <h1>{product.category}</h1>
                    <ProductRow key={product.name} product={product} />
                </div>
            }
        })



        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>

                {listadoProducts}
            </table>


        )
    }
}

export default ProductTable
