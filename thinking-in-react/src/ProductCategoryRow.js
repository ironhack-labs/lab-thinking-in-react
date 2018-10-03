import React, { Component } from "react";
import data from "./data.json";
import "./App.css";

export const ProductCategoryRow = (props) => {
  
    return (
      <tr>
        <th colSpan="2">
        {props.category}
        </th>
      </tr>
       
    );
  
}