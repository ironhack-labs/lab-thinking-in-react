export function SearchBar({ handleChange, formState }) {
  console.log(formState);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        onChange={handleChange}
        value={formState}
      />
    </div>
  );
}
