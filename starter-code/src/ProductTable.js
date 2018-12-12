import React, { Component } from 'react';


// List
import ListFromData from './data.json';

// Child
import Categories   from './Categories'

// Child
import ExactProduct from './ExactProduct'


class ProductTable extends Component{


state = {

    listOfProducts : ListFromData['data'],
    ArrayOfItems : []
}


// checkCategory(Category, listOfProducts){

    

//     let products = [];
//     // array
//     listOfProducts.forEach((eachObject) =>{
//         products.push({name : eachObject.name , price : eachObject.price })
//     })
// }


showSportingGoods(theCategory){

    

    return (
        this.state.listOfProducts.map((eachObj, Index) =>{
            if(eachObj.category == theCategory){
            return (
                
                <ExactProduct type = {eachObj} />

            )
            }
        })
    )

}


render(){
    console.log(this.state.listOfProducts)

    return(

        // Product Table
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            

            
            <Categories category = {"Sporting Goods"} />
            

            {this.showSportingGoods("Sporting Goods")}

            


            <Categories category = {"Electronics"} />


            {this.showSportingGoods('Electronics')}
            
            
        </table>



    )
}

}















export default ProductTable;