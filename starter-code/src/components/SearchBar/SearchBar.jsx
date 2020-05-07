import React, { Component } from 'react';

export default function SearchBar(props) {
  return (
    <>
      <p>Search</p>
      <input type="text" value={props.search} onChange={props.handleChange} />
      <input type="checkbox" name="" id="" />
    </>
  );
}
