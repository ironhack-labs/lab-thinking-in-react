import { React } from 'react'

export default function ProductRow(props) {

  return(
    <>
       {props.products.map(product => {
           if(product.inStock === true){
            return (
                <tr key={product.id} style={{display:"block"}}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>   
            )} else {
            return (
                <tr key={product.id} style={{display:"block", color:"red"}}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>   
            )   
            }
        })}
    </>)
}
