import React, { Component } from 'react';
import ProductRow from './ProductRow'

class ProductTable extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        const {search, products, stock} = this.props 
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    
                    {
                        stock ? 
                            products.filter(item => item.stocked).filter(item => item.name.toLowerCase().includes(search)).map((item, idx) => <ProductRow name={item.name} key={idx} price={item.price} stocked={item.stocked} />)
                            :   
                            products.filter(item => item.name.toLowerCase().includes(search)).map((item, idx) => <ProductRow name={item.name} key={idx} price={item.price} stocked={item.stocked} />)
                    }
                </table>
            </div>
        )
    }

}
export default ProductTable;