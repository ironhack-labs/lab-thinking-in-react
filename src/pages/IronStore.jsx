import { SearchBar, Table } from "../components"
import { useState, useEffect } from "react"
import './IronStore.styles.css'

export const IronStore = () => {
  const [posts, setPosts] = useState([])

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

  return(
    <>
      <section className="body">
        <h1>IronStore</h1>
        <SearchBar title="Search" placeholder="Search your product" checkboxtext="Only show products in stock"/>
        {posts.length && <Table array={posts} />}
      </section>
    </>
  )
}