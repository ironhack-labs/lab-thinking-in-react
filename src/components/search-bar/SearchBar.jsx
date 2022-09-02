function SearchBar({ data, product }) {
    /* function handleChange(event) {
      console.log(data.filter(data => data.includes(event.target.value)))
    } */
  return (
    <div>
      <form className="d-flex flex-column" role="search">
        <h3 className="align-self-center">Search</h3>
        <input onChange={event => console.log(data.filter(data => data.name.startsWith(event.target.value)))}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <datalist>
          {data.map((i) => (
            <option key={(i.name)} value={i.name} />
          ))}
        </datalist>
      </form>
    </div>
  );
}

export default SearchBar;
