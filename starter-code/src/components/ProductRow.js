import React, { Component } from 'react';

class ProductRow extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        
        const {name, price, stocked} = this.props;
        console.log(name);
        return(
            <>
                <tr>
                    <td style={{color: (stocked ? 'black' : 'red')}}>
                       <h2>{name}</h2> 
                    </td>
                    <td>
                        <h2>{price}</h2>
                    </td>
                </tr>
            </>
        );
    }
}

export default ProductRow; 