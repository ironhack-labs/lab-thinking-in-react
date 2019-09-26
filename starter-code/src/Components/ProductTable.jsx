import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            category1: "Sporting Goods",
            category2: "Electronics"
        }

    }

    displayBody = () => {
        if(this.props.searchOn === ""){
            return (
                <tbody>
                <tbody>
                    <tr>
                    <th colspan="2">{this.state.category1}</th> 
                    </tr>
                    {this.filterItems(this.props.dataToPass, this.state.category1)}
                </tbody>
                <tbody>
                  <tr>
                  <th colspan="2">{this.state.category2}</th> 
                  </tr>
                  {this.filterItems(this.props.dataToPass, this.state.category2)}
               </tbody>
               </tbody>
            )
        }else{
            
        }
    }

    filterItems = (theData, title) => {

        // let categoryList = [...this.state.categories]

return theData.map((eachItem, index) => {
        if(eachItem.category === title){
            return (
                <ProductRow key={index}
                name={eachItem.name}
                price={eachItem.price}
                stock={eachItem.stocked}
                />
            )
        }else{
           return;
        }
       
    
})
    }
    
  displayAllItems = (theData) => {
      return theData.map((eachItem, index) =>{
        return (
    <ProductRow key={index}
    name={eachItem.name}
    price={eachItem.price}
    stock={eachItem.stocked}
    />
    )
    })
}

    render(){
        return(
           <table>
                 <thead>
               <tr>
                   <th>Name</th>
                   <th>Price</th>
               </tr>
               </thead>
               <tbody>
                {this.displayBody()}
               {/* {this.displayAllItems(this.props.dataToPass)} */}
              
               </tbody>
           </table>
        )
    }
}

export default ProductTable;