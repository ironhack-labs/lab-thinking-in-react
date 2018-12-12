import React, { Component } from 'react';

import ListFromData from './data.json';


class ExactProduct extends Component{



    state = {

        DataList : ListFromData["data"],
        uniqArrayOfCategories: [],
        categoryList: []
        
    }





    render(){
        

        return (

            <div>
                <tr>
                    <td>
                        {this.props.type.name}
                    </td>
                    <td>
                         {this.props.type.price}    
                    </td> 
                </tr>
            </div>

        

           
            

        )





    }

}



















export default ExactProduct;