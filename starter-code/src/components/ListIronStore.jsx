import React, { Component } from "react";
import ListIronStoreChild from "./ListIronStoreChild";



export default class ListIronStore extends Component {

  render() {
      console.log("rrr",this.props.stock);
     return (
      <div>
          <table>
             { this.props.data.map((d, i) => (              
                 <ListIronStoreChild key={i} name={d.name} price={d.price} stocked={d.stocked} stock={this.props.stock}  />
                )
            )};
         </table>
      </div>
    );
  }  
}