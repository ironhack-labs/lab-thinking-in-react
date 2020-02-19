import React, { Component } from "react";
import ListIronStoreChild from "./ListIronStoreChild";




export default class ListIronStore extends Component {


  

  render() {
     
     
     return (
      <div>
          <table>
             { this.props.data.map((d, i) => (              
                 <ListIronStoreChild key={i} name={d.name} price={d.price} stocked={d.stocked} />
                )                       
            )};
         </table>
      </div>
    );
  }  
}