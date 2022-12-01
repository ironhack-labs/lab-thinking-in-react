

function SearchBar({ product, handleProduct }) {
    
    const handleform = e => {
        handleProduct(e.target.value)
    }
    

  return(
      <div>
          <h1>SearchBar</h1>
       
          <form >
              
              <label>Nombre del producto</label>
              <input type="text" value={product} onChange={handleform} />
                
              
          </form>

          
      </div>    
  )
}

export default SearchBar