import React from 'react';

const productRow = (props) => {
    //console.log(props)
    let thisClass = "";

    if(props.stocked){
        thisClass = "column" 
    } else {
        thisClass = "column red"
    }


    return (
        <div className="columns">
            <div className={thisClass}>{props.name}</div>
            <div className={thisClass}>{props.price}</div>
        </div>
    )
}
//className="column"
export default productRow;