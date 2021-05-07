import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <ProductRow data={props.data} query={props.query} stocked={props.stocked}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        )  
}