export default function SearchBar() {
  return (
    <div>
      <input type="search" />
      <input type="checkbox" name="productsInStock" id="" value={false} />
      <label htmlFor="productsInStock">Only show products in stock</label>
    </div>
  );
}
