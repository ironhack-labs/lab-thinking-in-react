import React from 'react';

export const Table = ({store}) =>(
    <table>
        <tr>
            <th>Nombre</th>
            <th>Precio</th>
        </tr>
        <tbody>
            {/** Aqui va otro componente */}
            {
            store.map((item,index)=>(<Content
                key={index}
                //name={item.name}
                //price={item.price}
                {...item}
            />))
        
            }
        </tbody>
    </table>
);

//Con llaves

const Content =({name,price,stocked}) =>{
    //console.loh consy--
    return(
        <tr>
            <td style={{color:stocked ?"black":"red"}}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}
