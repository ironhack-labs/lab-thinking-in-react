import React from 'react';

const Searchbar = props => {
  const changeHandler = event => {
    const { value } = event.target;
    // console.log(value);
    props.handleQuery(value);
  };

  const handleCheck = event => {
    const { checked } = event.target;
    console.log(checked);
    props.handleCheck(checked);
  };

  return (
    <div>
      <h3>Search</h3>
      <form>
        <input
          type="text"
          name="query"
          id="query"
          onChange={changeHandler}
          value={props.query}
        ></input>
        <label htmlFor="">Only show products on stock</label>
        <input
          type="checkbox"
          name="stock"
          id="stock"
          checked={props.stock}
          onChange={handleCheck}
        />
      </form>
    </div>
  );
};

export default Searchbar;
