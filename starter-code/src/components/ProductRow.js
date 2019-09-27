import React from 'react';

const ProductRow = props => {
    console.log(props)
    const myData = props.products.data;
    console.log(myData)
    return (
        <div>
            {myData.filter(x => {
            if (x.name.includes(props.query)) return true
            }).filter(x => {
                    if (props.queries === true) { return x.stocked }
                    else return true
                }).map(x => {
               return ( <div className="tableHeader">
                    <div>{x.name}</div>
                    <div>{x.price}</div>
                </div>)
            })
            } 
            </div>
  )};
;

export default ProductRow;
