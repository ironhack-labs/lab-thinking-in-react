import jsonData from "./../data.json";
import { useState } from 'react';
import ProductTable from "./ProductTable";
import "./../App.css"
import SearchBar from "./SearchBar";



function ProductPage () {
         const [products,setProducts] = useState (jsonData);
         const [originalProducts, setOriginalProducts] = useState(jsonData);
         
         function handleSearch (text){
            
            if(text === ''){
                setProducts(originalProducts) 
            }
            else{
            const filteredProducts = products.filter((product)=> product.name.toLowerCase().includes(text.toLowerCase()));
            setProducts(filteredProducts);
            }

         }

        
            return(
                <div className="product-page">
                   <h1> Iron Store </h1>
               
                
               <SearchBar onSearch = {handleSearch} />
                <ProductTable products = {products}/>
                
                </div>
              
                
            )
       



                        }       


                        export default ProductPage;