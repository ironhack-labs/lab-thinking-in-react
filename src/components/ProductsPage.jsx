import DataData from '../data.json'
import { useState } from 'react';

function ProductPage() {
    const [products , setProducts] = useState(DataData)
    
    return(
        <>
        <h1>IronStore</h1>
        </>
    )
}

export default ProductPage