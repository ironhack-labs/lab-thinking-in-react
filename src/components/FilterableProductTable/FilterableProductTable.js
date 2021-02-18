import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable"

function FilterableProductTable({data}){
  const [search, setSearch] = React.useState("");
  const [checkBox, setCheckBox] = React.useState(false)
  const orderData = data.sort((a,b)=>a.price - b.price)
  const stock = () => {
    if (checkBox){
      return orderData.filter((product) => product.stocked === true)
    } else {
      return orderData
    }
  }
  const handleChange = (e) =>{
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const handleCheck = () => {
    setCheckBox(!checkBox);
  }

  return(
    <div className="container">
    <SearchBar onChange={handleChange} input={search} checked={handleCheck}/>
    {search ? (
      <ProductTable  data={stock().filter(({name}) =>
      name.toLowerCase().includes(search.toLowerCase())
      )}

      />
    ) : (<ProductTable data={stock()}/>)
    }
    </div>
  )
}

export default FilterableProductTable