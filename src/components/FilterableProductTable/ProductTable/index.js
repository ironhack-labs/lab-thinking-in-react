import React from 'react'

import ProductRow from './ProductRow'






const ProducTable = props => {

    return (
        <>
            <table>

                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {props.products.map((elm,idx) =>  (<ProductRow key={idx} name={elm.name} price={elm.price}/>))}
                </tbody>
            </table>
        </>

    )


}

export default ProducTable