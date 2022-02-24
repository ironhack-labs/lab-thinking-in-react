import { useState } from 'react'


function ProductRow({ name, price, inStock, index}) {

    // const [fetching, setFeching] = useState(true)

   const productColor = (inStock,index) => {
       if( inStock===true){
           return <p>{name}               {price}</p>
       }    else {
                return <p>{name}               {price}</p>
            }
    }

 
    return (
        <div>
            <p >{name}               {price}</p>
            <hr/>
        </div>
    )
}

export default ProductRow