import React from 'react'

const Product = (props) => {
    // console.log(props.data)
    return (
        
            <div className='row'>
                <div className='col-md-5'>
                <p>{props.data.name}</p>

                </div>
                <div className='col-md-5'>

                <p>{props.data.price}</p>

                </div>

            </div>
               
  )
}

export default Product