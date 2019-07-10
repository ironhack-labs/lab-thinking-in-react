import React from 'react'

import ProductRow from './ProductRow'
//import SearchBar from './SearchBar';

export default function ProductTable(props) {
    return (       
        <table className="column product-table" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map( (item, index) =>{      
                    return (<ProductRow 
                        key={index}
                        index={index}
                        item={item} /> )
                                    
                    })
                }
            </tbody>
        </table>
            
    )
}

