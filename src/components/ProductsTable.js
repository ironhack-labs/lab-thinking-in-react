import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import jsonData from '../data.json';

function Products(props) {
  const [products, setProducts] = useState(jsonData);
  const [query,setQuery]= useState('')
  

 
  return (
    <div>
      <h1>IronStore</h1>

    <input placeholder='Search' type='text' onChange={(e)=>setQuery(e.target.value)}/>
   
    <br/>
    <input  type='checkbox'  /> Only show products in stock

      <table className='table'>
        <thead>
        <tr>
          <td scope='col'>Name</td>
          <td scope='col'>Price</td>
        </tr>
        </thead>

        {products.filter(product=>{

          if(query === ''){
            return product;
          }
          else if (product.name.toLowerCase().includes(query.toLocaleLowerCase())){
            return product
          }
            
          }).map((product) => {
          return (
            <tbody>
            <tr>
             {product.inStock ? <td >{product.name}</td>: <td className='redProduct'>{product.name}</td>}
              <td>{product.price}</td>
            </tr>
            </tbody>
          );
        })
        }
        
      </table>
    </div>
  );
}

export default Products;
