//import React and stuff
import React,{ Component } from "react";
//import CSS
import './ProductTableRow.css'

class ProductTableRow extends Component{
    render(){
        return(
            <>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
            </>
        );
    }
}

export default ProductTableRow