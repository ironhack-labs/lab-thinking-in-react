import React from 'react'

function ProductRow(props) {
    console.log(props.stocked)
  return (
    <div className="row">
        <div className= "col-6"><span className={props.stocked ? "" : "red"}>{props.name}</span></div>
        <div className= "col-6">
            {props.price}
        </div>
    </div>
  )
}
export default  ProductRow