import React, { Component } from "react";

const Table = () => (
<table>
    <tr>
        <tr> Nombre </tr>
        <tr> Precio </tr>
        </tr>

        <tbody>
            {/**
             * Aqui va otro componente!!!
             */}
{
    store.map((item,index)=> (<Component
    key={index}

    // escribir todos los props uno por uno 

    name={item,name}
    price={item,price}
// opcin 2
// {... item}
        />))
}
             </tbody>
</table>
);


const Content = ({name,price,stocked}) => {

    // console.log const ...
    return(
        <tr>
        <tr> {name} </tr>
        <tr> {price}</tr>
        </tr>
    )
}