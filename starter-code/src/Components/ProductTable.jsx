import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            categories: ["Sporting Goods", "Electronics"],
            chosenOne: 0
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
return;

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
               {/* {this.displayAllItems(this.props.dataToPass, this.state.categories)} */}
              
    
           </table>
        )
    }
}

export default ProductTable;

  //OLD VERSION
//   displayAllItems = (theData, category) => {
   
//       return category.map(eachCategory => {
//         let chosenOne = 0;
//         return theData.map((eachItem, index) =>{
//             if(eachItem.category === eachCategory){
//                 if(index < 1 || index === this.state.chosenOne){
//               return (
//                   <tbody>
//                   <th>{eachItem.category}</th>
//                   <ProductRow key={index}
//                   name={eachItem.name}
//                   price={eachItem.price}
//                   stock={eachItem.stocked}
//                   />
//                   </tbody>
//                   )
//                 }else{
//                     return (
//                         <tbody>     
//                         <ProductRow key={index}
//                         name={eachItem.name}
//                         price={eachItem.price}
//                         stock={eachItem.stocked}
//                         />
//                         </tbody>  
//                     )
//                 }
//             }else{
    
//             }
             
//       })
//     })
// }
    //         }else{
    //       return (
    //   <ProductRow key={index}
    //   name={eachItem.name}
    //   price={eachItem.price}
    //   stock={eachItem.stocked}
    //   />
    //   )
