import React from 'react'

export default (props)=>{

    const products= props.products
    console.log(products)

    return(
        <div className="container-list">
                <div className="card-list">
                    <h5>Name:</h5>
                    <h5>Price:</h5>
                </div>
                
            {products.map((el,index)=>{
                return(
                    <div key={index} className="card-list">
                        <p>{el.name}</p>
                        <p>{el.price}</p> 
                    </div>
                )
            })}
        </div>
    )
}
