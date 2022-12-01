import './ProductRow.css'


import { useState } from "react"



function ProductRow({products}) {
    

    const [myproducts, setMyProducts] = useState(products)

  return(
      <div>

          {myproducts.map(elem => {
              return (
                  <div key={elem.id} className="flexProduct">
                    <div>{elem.name}</div>
                    <div>{elem.price}</div>
                </div> 
              )
          })}
          

      </div>    
  )
}

export default ProductRow