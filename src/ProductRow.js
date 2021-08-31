import React from 'react';


export default class ProductRow extends React.Component{

    state={
        products: this.props.products
    }



    render(){
        let nameStyle = {color: "white"};
        
        const productList = this.state.products.map(product => {
            if (!product.stocked) {nameStyle = {color: 'red'}

            }
            return(
                <tr key={product.id}>
                    <td  style={nameStyle}>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })

        return(
            <>{productList}</>
            
        )

     }

}
