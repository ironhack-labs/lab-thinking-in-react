export function SearchBar({ searchString, handleChange }) {
  return (
    <div>
      <input value={searchString} onChange={handleChange} />
    </div>
  );
}
