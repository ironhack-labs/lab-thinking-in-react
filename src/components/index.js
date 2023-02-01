import { useState } from "react";
import jsonData from './../../data.json'

function ProductPage (){
    const [products, setProducts] = useState(jsonData);

    return (
         <div>
              <h1>
                  IronStore
              </h1>

         </div>
    )
}