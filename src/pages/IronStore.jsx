import { SearchBar, Table } from "../components"
import { useState, useEffect } from "react"
import './IronStore.styles.css'

export const IronStore = () => {
  let data;

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('') 
  const [isCheck, setCheck] = useState(false);

  useEffect(() => {
    fetch('data.json')
        .then((res) => res.json())
        .then((data) => {
          setPosts(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleCheckbox = () => {
    setCheck(current => !current)
  }

  if (isCheck === true){
    data = posts.filter((item) => 
    item.inStock === true
  )}else{
    data = posts.filter((item) =>
    item.id.toLowerCase().includes(search.toLowerCase()))
  }

  return(
    <>
      <section className="body">
        <h1>IronStore</h1>
        <SearchBar 
          title="Search" 
          placeholder="Search your id product 🔍" 
          checkboxtext="Only show products in stock" 
          onChange={handleSearch}
          defaultChecked={false}
          value={isCheck}
          onChangeCheckbox={handleCheckbox}
        />
        {posts.length && <Table array={data} />}
      </section>
    </>
  )
}