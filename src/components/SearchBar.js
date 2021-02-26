import React, { useState } from 'react';

export default function SearchBar(props) {
  const [estadoBoton, setEstadoBoton] = useState(false);

  function handleChange(event) {
    event.preventDefault();
    //[event.target.name] = event.target.value
    if (event.target.name === 'search') {
      const searchArticulo = props.articulosABuscar.filter((elem) => {
        return elem.name.includes(event.target.value);
      });
      props.funcSetArt(searchArticulo);
    } else {
      setEstadoBoton(estadoBoton ? false : true);
    }
  }

  function clickBox(event) {
    event.preventDefault();
    const searchArticulo = props.articulosABuscar.filter((elem) => {
      return elem.stocked === estadoBoton;
    });
    props.funcSetArt(searchArticulo);
  }

  return (
    <>
      <input
        onChange={(event) => handleChange(event)}
        type="text"
        placeholder="Search"
        name="search"
      />
      <p>Check to show with stock</p>
      <input
        type="checkbox"
        name="stock"
        onClick={(event) => clickBox(event)}
        value={estadoBoton}
        onChange={(event) => handleChange(event)}
      />
    </>
  );
}
