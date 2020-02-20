import React from 'react'


export default function ProductRow ({name , price, category, stocked}){
    function getColor(stocked) {
        return stocked ? "black" : "red"
    }



        return (
            <tr style={{color:`${getColor(stocked)}`}}>
                <td>{name}</td>
                <td>{price}</td>
                <td>{category}</td>
            </tr>
           
        )
    
}

