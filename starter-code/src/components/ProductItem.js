import React from 'react'

const ProductItem  = ({ category, price, stock, name }) => {
   return (
       <div className="container">
           <div className="row justify-content-center">
               <div className="col-6">
                    <strong>{name}</strong> 
               </div>
                <div className="col-6">
                    <small>{price}</small>
                </div>
            </div>       
       </div>
   )
}
export default ProductItem

