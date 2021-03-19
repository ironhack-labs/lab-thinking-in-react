import React, { Component } from 'react'
import ProductRow from './ProductRow'
import '../App.css';


class ProductTable extends Component {

    render() {
        return (
            <div className="tabela">
                <table>
                    <thead>
                    <tr>
                <th>Nome</th>
                <th>Price</th>
                </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map((product) => {
                        return <ProductRow 
                        key={product.id}
                        {...product} />
                    })}
                    </tbody>    
                </table>
            </div>


        )
    }
}

export default ProductTable
