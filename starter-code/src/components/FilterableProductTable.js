import React from "react";
import SearchBar from "../components/SearchBar";
import ProducTable from "../components/ProducTable"

const FilterableProductTable = ({ products, handleSearch }) => (
  <section className="uk-section">
    <div className="uk-container">
      <h1 className="uk-heading-medium uk-text-center">IronStore</h1>
      <SearchBar handleSearch={handleSearch} />
      <h2><ProducTable/>Aqui iria el Componente ProductTable y el ProductRow!!!!</h2>
      <div className="uk-flex uk-flex-center">
        <div>
          {products.map((product, index) => (
            <p key={index}>{product.name}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FilterableProductTable;