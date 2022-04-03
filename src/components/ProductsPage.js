import { useState } from 'react';
import jsonData from './../data.json';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [list, setList] = useState(products);
  const [filterOn, setfilterOn] = useState(true);
  

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleChecKBox = () => {
    setfilterOn(!filterOn)
    filter()
  }

  const filter = () => {
    if (filterOn) {
      setList(products.filter(el => el.inStock===true))
    } else {
      setList(products)
    }
  }

  return(
      <div>
        <h1>IronStore</h1>
        <input type="text" onChange={handleChange}/>
        <label><input type="checkbox"  onChange={handleChecKBox}/> Show only products in stock</label>
        
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>category</th>
              <th>inStock</th>
            </tr>
          </thead>

          <tbody>
            {list.map((el, index )=> {
              if (el.name.toLowerCase().includes(search.toLowerCase())){
                return (
                <tr style={el.inStock ? {color:"red"} :{color:"black"} } key={index}>
                  <td >{el.name}</td>
                  <td>{el.price}</td>
                  <td>{el.category}</td>
                  <td>{el.inStock && "x"}</td>
                </tr>
                )
              }
            })}
          </tbody>

        </table>
      </div>    
  )
}

export default ProductsPage