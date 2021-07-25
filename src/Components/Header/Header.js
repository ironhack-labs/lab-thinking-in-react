//import React and stuff
import React from 'react';
//import Components

//import CSS
import './Header.css';

function Header({title}) {
  return (
    <header>
    <h1>{title}</h1>
    </header>
  );
}

export default Header;
