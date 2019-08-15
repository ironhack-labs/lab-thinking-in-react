import React from 'react'



const ProductTable = props => {
  console.log(props.pepe)

  return(
      <div className="green"> 
        <div className="flex">
            <h3>Name</h3>
            <h3>Price</h3>
        </div>
            {  
              props.pepe.map((elm, idx)=>{
                
              return (

                <div key={idx} className="flex red">
                    <p>{elm.name}</p>
                    <p>{elm.price}</p>
                </div>
              )
              })  
            }

        </div>
  )


} 

export default ProductTable