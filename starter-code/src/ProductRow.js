import React, { Component } from 'react';
import data from './data.json'

class ProductRow extends Component {
    state = {
        listOfAllGoods: data.data,
    }
    
    showSports = () => {
        const allTheGoods = this.state.listOfAllGoods;

        const listItems = allTheGoods.map((theItems, index) => {
            if(allTheGoods.category === "Sporting Goods"){
            return (
                    listItems.category.filter(theItems)
                )}
        })  
    }
   

  render() {
        return (

        <div className="redBox"> {/* red box */}
            {/* {this.showSports()} */}
        </div>
        )
  }
}






export default ProductRow;