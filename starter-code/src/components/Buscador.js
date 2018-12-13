import React from "react";

const Buscador = ({ searchProduct, stockedProduct }) => {
  return (
    <form>
      <input
        onChange={searchProduct}
        placeholder="busqueda"
        name="Search"
        type="text"
      />
      <p>
        <input onClick={stockedProduct} type="checkbox" name="checkbox" />
       
      </p>
    </form>
  );
};

export default SearchProducto;