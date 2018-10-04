import React, { Component } from "react";

export const ProductSport = (props) => {

  const data = props.data

  const sports = data.filter(e => e.category == 'Sporting Goods')

  console.log(sports)

  return (
      <tbody>
        { sports.map((e,i) => {
          return (
            <tr>
              <td>{e.name}</td>
              <td>{e.price}</td>
            </tr>
          )
        })}
      </tbody>
  );
};

export const ProductElectric = (props) => {

  const data = props.data

  const electric = data.filter(e => e.category == 'Electronics')
  console.log(electric)

  return (
      <tbody>
        { electric.map((e,i) => {
          return (
            <tr>
              <td>{e.name}</td>
              <td>{e.price}</td>
            </tr>
          )
        })}
      </tbody>
  );
};