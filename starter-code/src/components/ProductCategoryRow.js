import React from 'react';
import ProductRow from './ProductRow'

const productCategoryRow = (props) => {
// console.log("this is the start of PCR")
// console.log(props.data)
    
    return (
        <div className="">
            <h2>{props.categoryName}</h2>
            {    
                props.data.map((thisItem, index) => {
                    //console.log(thisItem);
                    return <ProductRow key={index} {...thisItem} />                          
                })    
            }
        </div>
    )
}

export default productCategoryRow;