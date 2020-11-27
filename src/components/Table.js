import React, {Component} from 'react';

const Table = ({data}) => {
    return(
    <section>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <tbody>
           {
           data.length ?
           data.map((item,index)=>(
           <Content 
           key={index}
           {...item}
           />))
           :"No tengo datos aún!!!"
           }
           </tbody>
        </table>
    </section>)
}

const Content = ({name,price,stocked}) => {
    return (
        <tr style={{backgroundColor: stocked ? "#fff" : "red"}}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default Table