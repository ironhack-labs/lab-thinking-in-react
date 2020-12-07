import React, { Component } from 'react';

class ProductRow extends Component {
    render({name, price, inStock} = this.props) {
        let nameSpan;
        if(inStock){
            nameSpan = <span>{name}</span>;
        }else{
            nameSpan = <span style={{color: "red"}}>{name}</span>;
        }
        return (
            <div className="row">
                {nameSpan}
                <span>{price}</span>
            </div>
        );
    }
}

export default ProductRow;