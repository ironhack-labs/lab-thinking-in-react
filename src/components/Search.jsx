const Search = ({ onChange, onChange1, checked }) => {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">Search</label>
          <input type="text" className="form-control" onChange={onChange} />
          <div className="form-text"></div>
        </div>
      </form>
      <input type="checkbox" onChange={onChange1} checked={checked} />
      <label className="mx-1">Only show products in stock</label>
    </div>
  );
};

export default Search;
