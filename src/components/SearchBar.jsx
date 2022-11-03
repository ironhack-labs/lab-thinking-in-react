export function SearchBar({ searchString, handleChange, handleCheckbox }) {
  return (
    <div>
      <input value={searchString} onChange={handleChange} />
      <input type="checkbox" onChange={handleCheckbox} />
    </div>
  );
}
