import React, { Component } from 'react';


import ListFromData from './data.json';



class Categories extends Component{

    state = {

        DataList : ListFromData["data"],
        uniqArrayOfCategories: []
  
    }


     componentDidMount(){
        this.Listcategory();
     }


    Listcategory(){
      const   copyArray = [...this.state.DataList];

      const ArrayOfCategories = [];

      copyArray.forEach((eachObject) =>{
        ArrayOfCategories.push(eachObject["category"])
      })
      
      // Remove dublicate categories 

      const newArray = [...new Set(ArrayOfCategories)];


      this.setState({
        uniqArrayOfCategories : newArray
      })

    }

    showCategories(){


        

        let copy = this.state.uniqArrayOfCategories;
        

       return  copy.map((eachElement,Index) =>{
            return (
                
                <tr key = {Index}> {eachElement}</tr>
                
            )
        })
    }


    render(){


      
        return (


            <tr>
                {this.props.category}
            </tr>
        
        // <div>

        //     {this.showCategories()}
        // </div>
        

        )



    }

}













export default Categories;


