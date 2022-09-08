import ProductsTable from "./productTable"
import Searchbar from "./searchbar"
import {useState} from "react"

function ProductsPage() {
  const [search, setSearch] = useState('')
  const [filterStock, setFilterStock] = useState(false)
  const[showTable, setShowTable] = useState(false);
  
  return(
    <div>
    <center><h1><button onClick={() => setShowTable(!showTable)} className="btn btn-primary mt-4"> Ironhack Table Of Products</button>
</h1></center>

<center> 
<Searchbar  search={search} setSearch={setSearch} setFilterStock={setFilterStock} filterStock={filterStock} />

{showTable && <ProductsTable  search={search} filterStock={filterStock}/>}
</center>
    </div>
  )
}

export default ProductsPage