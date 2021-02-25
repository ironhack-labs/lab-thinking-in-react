import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
    //console.log(props.products)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product => {
                        return (

                    <ProductRow product={product} />
                        )

                    })

                    }
                            
                        
                </tbody>
            </table>
        </div>
    )
}
