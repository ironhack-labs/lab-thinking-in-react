import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            categories: ["Sporting Goods", "Electronics"],
        }

    }

    displayBody = () => {
        if(this.props.category === ""){
            return this.state.categories.map((eachCategory, index) => {
            return (
                <tbody key={index}>
                    <tr>
                    <th colSpan="2">{eachCategory}</th> 
                    </tr>
                    {this.filterItems(this.props.dataToPass, eachCategory)}
                </tbody>
            )

        })  
    }else if(this.state.categories.indexOf(this.props.category) < 0){
return (
    <div>

    </div>
)

    }else{
        return (
            <tbody>
                <tr>
                <th colSpan="2">{this.props.category}</th> 
                </tr>
                {this.filterItems(this.props.dataToPass, this.props.category)}
            </tbody>
        ) 
    }
        }
     

    filterItems = (theData, title) => {

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
            
    
                {this.displayBody()}
               {/* {this.displayAllItems(this.props.dataToPass)} */}
              
    
           </table>
        )
    }
}

export default ProductTable;