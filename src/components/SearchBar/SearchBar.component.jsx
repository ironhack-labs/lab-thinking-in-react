export default function SearchBar(props) {
  const { handleSearchChange, setFiltered } = props;
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={(event) => {
          const searchText = event.target.value.toLowerCase();
          handleSearchChange(searchText);
          setFiltered(searchText);
        }}
      />
    </div>
  );
}
