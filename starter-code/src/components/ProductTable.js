import React from 'react'

const ProductTable = ({ children }) => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <table style={{ border: '1px solid black', padding: 8, margin: 8 }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>

    </div>
)


export default ProductTable