import React from 'react';

import './App.css';

import data from './data.json'

import MainComponents from './components/mainComponent/MainComponents'

function App() {
  return (

    <>

      <MainComponents products={data} />

    </>

  )
}

export default App;