import { Input } from 'antd';
import { Checkbox } from 'antd';
// Iteration 5
function Search(props) {

  function updateSearch(e) {
    props.search(e.target.value)
  }
  
  const handleCheck = (e) => {
    props.checked(e.target.checked);
  };
  
  return (
    <div className="search">

      <label>Search</label>
      <Input type="text" onChange={updateSearch} className="searchBar" />
      <Checkbox onChange={handleCheck}>Checkbox</Checkbox>;
    </div>
  );
}

export default Search;