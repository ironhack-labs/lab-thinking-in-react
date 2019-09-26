import React from 'react';

class ProductRow extends React.Component {

    constructor(props){
        super(props)

    }



    render(){
        return(
        
            <tr>
           <td className={!this.props.stock ? "outStock" : "" }>{this.props.name}</td>
           <td>{this.props.price}</td>
           </tr>
           
        )
    }
}


export default ProductRow;