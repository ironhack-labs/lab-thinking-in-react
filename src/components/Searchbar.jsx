import React, { useState } from "react";
import ProductRow from "./ProductRow";

function Searchbar(props) {
  const [searchValue, setSearchValue] = useState("");
  const [checkedValue, setCheckedValue] = useState(false)

  // event
  const handleSearchProduct = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const handleCheckedValue = () => {
    setCheckedValue(!checkedValue)
    console.log(checkedValue);
  }

  return (
    <>
      {/* FILTROS: buscador y check */}
      <div style={{ display: "flex", flexDirection:"column", gap:"16px" }}>
        <input
          type="text"
          placeholder="Search products"
          onChange={handleSearchProduct}
          value={searchValue}
        />

        <div style={{ display: "flex" }}>
          <input type="checkbox" value={checkedValue} onClick={handleCheckedValue} />
          <label htmlFor="checkbox"> Only show products in stock </label>
        </div>
      </div>

      {/* filtramos los productos */}
      {checkedValue===false &&  props.products
        .filter((eachProduct) => {
          if (searchValue === "") {
            return false;
          } else {
            return eachProduct.name.startsWith(searchValue);
          }
        })
        .map((eachProduct) => {
            <div
              key={eachProduct.id}
              style={{
                display: "flex",
                backgroundColor: "lightblue",
                justifyContent: "space-evenly",
                width: "40vw",
                border: "1px solid blue",
              }}
            >
              <h4>{eachProduct.category}</h4>
              <p>{eachProduct.name}</p>
              <p>{eachProduct.price}</p>
            </div>
        })}
    </>
  );
}

export default Searchbar;
