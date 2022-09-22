
import { React, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = ({products}) =>  {
    const [search, setSearch] = useState({})
    const [word, setWord] = useState("")
    
    const handleFilter = (event) => {
      const searchWord = event.target.value
      setWord(searchWord)
      const newSearch = products.filter((e) => {
        // console.log(e.name.includes(searchWord))
        return e.name.toLowerCase().includes(searchWord.toLowerCase())
      })
     if (searchWord === ''){
       setSearch([] )
    } else {
     setSearch(newSearch)
    }}

    // const clearInput = () => {
    //   setSearch([]);
    //   setWord("");
    // }


  // const searchProducts = (eventHTML) => {
  //   const { name, value } = eventHTML.target;
  //   setSearch({ ...search,  [name]: value });
  //   console.log(search);
  //   products.filter((wordSearch) => {
  //     console.log(wordSearch)
  //   })
  // }
  // console.log(products.filter((value)=> value.name));


  return (
  <Form.Group className="">
    <Form.Control
    name ="name"
    onChange={handleFilter}
    value={word}
     type="text" placeholder="Search" />
     <div>
     {word.length != 0 && (
        <div className="dataResult">
          {word.slice(0, 15).map((value) => {
            return (
              <>
              <p>{value.name}</p>
              </>
              
            );
          })}
        </div>
      )}
     </div>
  </Form.Group> 
  );
}

export default SearchBar;
