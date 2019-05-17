import React, { Component } from 'react';




class ProductRow extends Component {
 

    render() {

        return (
                <div className="row"> 
                        <p className="left">{this.props.name}</p>
                        <p className="right">{this.props.price}</p>
                    
                </div>
            
        );
    }
}

export default ProductRow;