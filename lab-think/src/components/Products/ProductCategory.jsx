import React from 'react'

const ProductCategory = ({handleCategory}) =>{
    return(
        <div>
            <h2 onClick={()=>handleCategory('Electronics')}>Electronica</h2>
            <h2 onClick={()=>handleCategory('Sporting Goods')}>Deportes</h2>
            <h2 onClick={()=>handleCategory('')}> Todos</h2>
        </div>
    )
}

export default ProductCategory