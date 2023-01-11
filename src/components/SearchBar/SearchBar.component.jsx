export default function SearchBar(props) {
  const { handleSearchChange } = props;
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        onChange={(event) => {
          handleSearchChange(event.target.value);
        }}
      />
      <input type="checkbox" name="productsInStock" id="" value={false} />
      <label htmlFor="productsInStock">Only show products in stock</label>
    </div>
  );
}
