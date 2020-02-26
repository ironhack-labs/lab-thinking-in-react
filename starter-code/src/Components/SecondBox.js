import React, { Component } from 'react';
import ThirdBox from './ThirdBox';

class SecondBox extends Component{
    render(){
        return(
            <div>
            
                <h1> Name</h1>
                    
                <ThirdBox products = { this.props.products}/>        
        
                
            </div>
        )
    }
}
export default SecondBox