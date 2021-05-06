import React from 'react'

class ProductRow extends React.Component{

    render(){
        const styleNoStock = {color: 'red'}
        return(
            <tbody className="product-row">
                {this.props.products.map((product, index)=>{
                    if(product.stocked){
                        return <tr key={index}><td>{product.name}</td><td>{product.price}</td></tr>
                    } else{
                        return <tr key={index}><td style={styleNoStock}>{product.name}</td><td style={styleNoStock}>{product.price}</td></tr>
                    }
                })}
            </tbody>
        )
    }
}

export default ProductRow
