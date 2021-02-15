import React from 'react';

export const ProductTable = ({store}) => (
    <section>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    store.map((item,index)=>(<Content
                        key={index} 
                        /*name={item.name}
                        price={item.price}*/
                        {...item}
                    />))
                }
            </tbody>
        </table>
    </section>
);

const Content = ({name, price, stocked}) => {
    return(
        <tr>
            <td style={{
                color: stocked ? 'black' : 'red'
            }}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}