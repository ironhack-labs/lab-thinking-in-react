import './SearchBar.css';

function SearchBar({ onSearchTerm, onCheck }) {

  return (
    <form className='d-flex flex-column justify-content-center align-items-center gap-3 m-2'>
      <input type="text" onChange={onSearchTerm} className='w-75 searchbar-search border border-subtle rounded-2'/>
      <div className='d-flex justify-content-center align-items-center gap-2 '>
        <input type="checkbox" onChange={onCheck} className='searchbar-checkbox'/>
        <label>Only show products in stock</label>
      </div>
    </form>
  );
}

export default SearchBar;
