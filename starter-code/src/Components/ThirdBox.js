import React, { Component } from 'react';



class ThirdBox extends Component{


    render(){

        let {data} = this.props.products

        return(
         
            <div>
                {
                    data.map((e,i) => {
                        return  <ul className="sin"><li key={i}>{e.name} {e.price} </li> </ul>
                                
                    })
                }
            </div>
            
        )
    }
}
export default ThirdBox