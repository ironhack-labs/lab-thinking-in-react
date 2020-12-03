import React from 'react'

export default function ProductRow(props) {
    const filtered = props.products.filter(data => data.name.toLowerCase().includes(props.query.toLowerCase()))
    
    console.log(props.isStock, "visible?")
    return (
        <div>
        {filtered.map(data => {
            let visiblity = props.isStock && !data.stocked ? "hidden" : "visible"
        return ( <tr style = {{visibility:visiblity}}>
        <td style = {!data.stocked ? {color:"red"} :null}>
      {data.name}
        </td> 
        <td>
      {data.category}
        </td>
        <td>
      {data.price}
        </td> 
         </tr>)
        })}
        </div>
    )
}


