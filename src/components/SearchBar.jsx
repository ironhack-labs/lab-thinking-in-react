import React, { useState } from 'react'; // NECESITO EL ESTADO PARA EL CHECK

const SearchBar = ({ onSearch }) => {
  const Search = (event) => {
    const searchTerm = event.target.value;  // funcion que devuelve el valor de la busqueda. se pasa como props al padre
    onSearch(searchTerm);
  };

  const ToggleButton = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
      setIsChecked(!isChecked); //cambio booleano del check
    };

    return (
      <div>
        <input type="text" placeholder="Buscar producto" onChange={Search} />
            <div className='buttonCheck'>
                <button onClick={handleClick}>{isChecked ? '✓' : ''}</button>
                <h3>Only show products in stock</h3>
            </div>
      </div>
    );
  };

  return (
    <div>
      <ToggleButton />
    </div>
  );
};

export default SearchBar;
