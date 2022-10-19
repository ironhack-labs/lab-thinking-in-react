import { useState } from 'react'; 
import jsonData from '../data.json';
import Search from "../components/Search";


function ProductsPage () {
    const [products, setProducts] = useState(jsonData);
    


const searchItem = (item)=>{
    setProducts(()=>{
        return item !== ''
        ? jsonData.filter((element) =>
            element.name.toLowerCase().startsWith(item.toLowerCase())
          )
        : jsonData;
    })
}


    return(
        <div>
          <h1>IronStore</h1>
          <Search callbackToSearch={searchItem}/>
        <table>
        <tr>
            <td>Product Category</td>
            <td>Product Name</td>
            <td>Product InStock</td>
            <td>Product Price</td>
        </tr>
          {products.map(product=>{
            return (
                    <tr>
                        <td>{product.category}</td>
                        <td>{product.name}</td>
                        <td>{product.inStock}</td>
                        <td>{product.price}</td>
                        
                        
                    </tr>
                 )
          })}
          </table>
        </div>    
    )
  }

  export default ProductsPage;