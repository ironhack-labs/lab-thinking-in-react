import React, { useReducer, createContext } from 'react';

const Context = createContext();

const initialState = {
  products: [],
  filteredProducts: []
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload
      };

    case 'FILTER_PRODUCTS':
      const { query, stocked } = action.payload;

      const filteredProducts = state.products.filter(product => {
        const productName = product.name.toLowerCase();
        const filterName = query.toLowerCase();
        const filterStocked = stocked ? product.stocked : true;

        return productName.indexOf(filterName) !== -1 && filterStocked;
      });
      return {
        ...state,
        filteredProducts
      };

    default:
      return state;
  }
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { AppContext };
export default Context;
