import React, { Component } from 'react';


class ProductRow extends Component {

    showSports = () => {
        const allTheGoods = [...this.props.data];
        const listItems = allTheGoods.filter((theItem, index) => {
            return theItem.category === "Sporting Goods"
        })  
            return listItems.map((theItem, index) => {
                return (

                    <div key={index} className="redBox">
                        <span>{theItem.name}</span>
                        <span>{theItem.price}</span>
                    </div>
                )
            })
    }
   

  render() {

        return (

        <div> {/* red box */}
            {this.showSports()}
        </div>
        )
  }
}






export default ProductRow;