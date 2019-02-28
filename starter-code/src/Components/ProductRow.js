import React,{Component} from "react"
import Data from "../data"





class ProductRow extends Component {
    state={
        products:[]
    }


    render(){

        return(
            <div>
                {Data.map(Datum =>{
                    return (
                        <div>
                            <p>{Datum}</p>
                        </div>
                    )
                
            })}
            </div>
            
        )
    }
}


export default ProductRow