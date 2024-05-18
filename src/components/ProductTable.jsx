import ProductRow from './ProductRow'


function ProductTable(props) {



  return (
    <div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>

        {props.products.map(product => {


          return <ProductRow key={product.id} name={product.name} price={product.price} category={product.category} i
          isInStock={product.inStock} id={product.id} />  

        })}

       

        </tbody>
     

    </table>
      
    </div>
  )
}

export default ProductTable

