import React from "react";
import "../App.css";

export default function ProductRow(props) {
    return (
        <div className="ProductRowMainDiv">
            <div className="ProductRowColumn" style={{color: props.stocked ? 'black':'red'}}>
                {props.name}
            </div>
            <div className="ProductRowColumn">
                {props.price}
            </div>
            <div style={{clear:"both"}} />
        </div>
    )
}