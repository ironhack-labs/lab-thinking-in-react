import React, {useState} from "react";

function SearchBar(props){

const [data,setData] = props.children;
const [value, setValue] = useState({
  searchInput: '',
  availableCheck: false,
});
                                    
function handleChange(e) {
    setValue({...value,[e.target.name]:e.target.value});
    setData([...data].filter((el) =>
        el.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
}                                    

 function handleClickCheck(e){
     setValue({...value,[e.target.name]:!e.target.checked})
    e.target.checked ? setData([...data].filter((el) => el.stocked)) : setData([...data]); 

    }

    return (
      <div>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            value={value.searchInput}
            name="searchInput"
            className="form-control"
            aria-describedby="Search Item"
            placeholder="Search"
          />
        </div>
        <div className="form-check">
          <input
            name="availableCheck"
            className="form-check-input"
            type="checkbox"
            checked={value.active}
            id="defaultCheck1"
            onChange={handleClickCheck}
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Only show products on stock
          </label>
        </div>
      </div>
    );

}



export default SearchBar;