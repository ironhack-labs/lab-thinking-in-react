import React, {Component} from 'react';

class ProductRow extends Component{

    render(){
        
        const productArr = this.props.products.data

        return(
            productArr.map(p => 
            <tr>
                <td>{p.name}</td> 
                <td>{p.price}</td>
             </tr>
            )
            )
    }
  };

  export default ProductRow;