import React from 'react';

const FilterableProductTable = ({ products }) => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">IronStore</h1>
      </div>
    </div>
    
    <input className="form-control mr-5 ml-2 form-control-lg" type="Search" placeholder="Search it..."></input>

   {/*  <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
    </div> */}
  </div>
);

export default FilterableProductTable