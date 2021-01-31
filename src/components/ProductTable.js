import React from 'react'
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        let products = this.props.products.map(product => {
            return <ProductRow key={product.id} product={product} />
        })

        return(
            <div>
                <table style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products}
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

export default ProductTable;