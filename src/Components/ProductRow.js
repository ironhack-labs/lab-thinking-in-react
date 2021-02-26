import React from 'react'

export default function ProductRow(props) {
    
    // const color = () => {
    //     if (!props.product.stocked) {
    //         return (color: "red")
    //     } else {
    //         return `{{color: "black"}}`
    //     }
    // }

    const filtered = props.product.filter(product => product.name.toLowerCase().includes(props.query.toLowerCase()))
    
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
                    {filtered.map(product => {

                        return (
                        <tr>
                            <td>{ product.name }</td>
                            <td>{ product.price }</td> 
                        </tr>
                        ) 

                    })}
                </tbody>
            </table>
        </div>
    )
}