import { InStockToggle } from "./InStockToggle";

export const SearchBar = ({ handleSearch,inStockToggle }) => {
  return (
    <div>
      <label>
        {' '}
        Search
        <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      </label>
      <InStockToggle inStockToggle={inStockToggle}/>
    </div>
  );
};


