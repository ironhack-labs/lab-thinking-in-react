import React from 'react';

const ProductTable = (props) => {


    return (

        <>

            <table border='1'>
                <thead>
                    <tr>
                        <td >Name</td>
                        <td >Price</td>
                    </tr>

                </thead>
                <tbody>
                    {props.products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>)
                    })}
                </tbody>
            </table>

        </>
    )

}

export default ProductTable;