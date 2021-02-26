import React, { useState } from 'react';

export default function SearchBar(props) {
  const [foodCopy, setFoodCopy] = useState(props.products);
  let [stock, setStock] = useState(false);

  function handleChange(event) {
    if (event.target.name === 'stock') {
      setStock(stock ? false : true);
    } else {
        console.log(stock);
      const filterFood = foodCopy.filter((food) => {
        return (stock ? food.stocked : true) && food.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
      });
      props.setproducts(filterFood);
    
    }
  }

function checkBox() {
    const filterFood = foodCopy.filter((food) => {
      if (!stock) {
        return food.stocked === true;
      }
      return true;
    });
    props.setproducts(filterFood);
  }

  return (
    <div>
      <h2>Search</h2>
      <input name="search" type="text" onChange={(e) => handleChange(e)} />
      <form>
        <input
         onClick={()=>checkBox()}
          onChange={(e) => handleChange(e)}
          type="checkbox"
          name="stock"
          value={stock}
        />
      </form>
      <label>Only show products on stock</label>
    </div>
  );
}
