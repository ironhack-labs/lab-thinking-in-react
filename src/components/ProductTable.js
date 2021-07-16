import React from 'react'
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

    

    render() {

        console.log('what ist this', this.props.products)
        console.log('what ist this', this.props.query)
        const filtered = this.props.products.filter(product => {
            return product.name.toLowerCase().includes(this.props.query.toLowerCase())
        });
        
        // const filtered = this.props.products.filter(product => {
        //     return product.name.includes(this.props.query)

        // })
        

        return (
            <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {ProductRow(this.props.products)} */}
                        <ProductRow 
                            products={filtered}
                        />
                    </tbody>
                </table>
            </div>
            </>
        );
    }
}

export default ProductTable;