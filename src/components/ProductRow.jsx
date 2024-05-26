import React from "react";

function ProductRow(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "1px solid black",
        width: "80vw",
      }}
    >
      {props.eachProduct.inStock === false ? (
        <p style={{ color: "red" }}> {props.eachProduct.name} </p>
      ) : (
        <p> {props.eachProduct.name} </p>
      )}

      <p> {props.eachProduct.price} </p>
    </div>
  );
}

export default ProductRow;
