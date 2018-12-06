import React, { Component } from "react";
import Results from "../Results/Results";
import Category from "../Category/Category";
import Product from "../Products/Products";
import DataJSON from "../../data.json";

const filterReduce = DataJSON.data.reduce((acc, e) => {
  if (acc[e.category]) {
    acc[e.category].push(e);
  } else {
    acc[e.category] = [e];
  }
  return acc;
}, {});

export default class Table extends Component {


  render() {
    return (
      <div>
        <input type="text" id="myInput" placeholder="Search for names.." />
        <br />
        <input type="checkbox" name="vehicle1" value="Bike" checked="false" />
        Only show products in stock
        <table id="myTable">
          {Object.keys(filterReduce).map(category => {
            return (
              <div>
                <Category category={category} />
                {Object.values(filterReduce[category]).map(e => {
                    console.log(e)
                    return <Product name={e.name} pepe={e.price}/>
                })}
              </div>
            );
          })}
        </table>
      </div>
    );
  }
}
