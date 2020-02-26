import React from "react";
import "../App.css";




const ProductRow = props => {
    return (
        <div className="row">
            <p style={{color: props.color}}>
                {props.name}
            </p>
            <p>
                {props.price} 
            </p>
        </div>
    );
}

export default ProductRow;
