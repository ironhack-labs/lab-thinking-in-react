import React from 'react'
import data from '../data.json'



const ProductRow= (props)=> {
    console.log("this is the ProductRow props", props.product.name)
    // console.log("this is the ProductRow props.stocked",props.product.stocked)
    // const filteredList=props.product.filter((product)=> {
    //     if (props.query === "") {
    //         console.log("work")
    //         return props.product.data;
    //     } 
        // else if (
        //     props.product.data.name.toLowerCase().includes(props.query)
        // ) { 
        //     return product;
        // }
    // });

    // console.log("help", filteredList[0].name)
    
    // if (props.props.data === false) {
        // console.log("great")
        // is this right, do I need 
        // console.log(props.props.data)
    //     return (
    //         <div> 
    //             <td style={{color: "red"}} > {props.props.data.name}</td>
    //             <td style={{color: "red"}} >{props.props.data.price}</td>
    //         </div>
    //     ) 
        
    // }
    return (
            <tr key={props.id}>
                <td>{props.product.name}</td>
                <td>{props.product.price}</td>
    
            </tr>
    )
}


export default ProductRow;