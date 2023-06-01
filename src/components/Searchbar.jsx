function Searchbar({ input, setInput, checkbox, setCheckbox }) {
  const updateList = (event) => {
    setInput(event.target.value);
  };

  const toggleCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };
  return (
    <div>
      <input type="text" value={input} onChange={updateList}></input>
      <input type="checkbox" onChange={toggleCheckbox} checked={checkbox} />
    </div>
  );
}

export default Searchbar;
