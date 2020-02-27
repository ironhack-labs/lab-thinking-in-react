import React from "react";


export default class ProductRow extends React.Component{


    render(){

        return(
            <tr>
                <td className= {this.props.stocked? "black" : "red"}>
                  {this.props.name} 
                </td>
                <td>
                  {this.props.price} 
                </td>
            </tr>    
         
        )
    }
}