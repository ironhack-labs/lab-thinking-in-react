import React from 'react';

export const SearchBar = (props) => {
  const busqueda = (event) => {
    props.filtrar(event.target.value);
  };
  return (
    <div>
      <h5 className="mt-4">Search</h5>
      <div className="input-group mb-3 col-md-12">
        <input
          type="text"
          className="form-control"
          placeholder="Busqueda"
          name="busqueda"
          onChange={busqueda}
        />
      </div>
    </div>
  );
};
