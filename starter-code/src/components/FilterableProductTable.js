import React from "react";
import SearchBar from "../components/SearchBar";
import ProducTable from "../components/ProducTable";

const FilterableProductTable = ({ products, handleSearch }) => (
  <section className="uk-section">
    <div className="uk-container">
      <h1 className="uk-heading-medium uk-text-center">IronStore</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className="uk-container uk-container-small uk-flex uk-flex-center">
        <ProducTable products={products} />
      </div>
    </div>
  </section>
);

export default FilterableProductTable;
