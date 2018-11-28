import React from "react"
import ProductRow from "./ProductRow"

const ProductCat = (props) => {
    return (
            <tbody>
                <tr>
                    <td className="subtitle" colSpan="2">{props.category}</td>
                </tr>
                 {props.products.map((product, idx) => {
                     if(!props.showOnlyStocked){
                        if(product.category === props.category) {
                            return <ProductRow key={idx} {...product} /> 
                        }
                    }   else {
                            if(product.category === props.category && product.stocked) {
                                return <ProductRow key={idx} {...product} /> 
                                }
                            }
                })}
            </tbody>
    )
};

export default ProductCat;