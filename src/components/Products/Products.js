import React, { useState, useEffect } from 'react';
import Search from './Search/Search';
import List from './List/List'

function Products({data}){
    const [input, setInput] = useState('');
    const [list, setList] = useState(data);// pasarle data
    const [productList, setProductList] = useState(); // data..

    const updateInput = async (input) => {
            const filtered = list.filter(p => {
             return p.name.toLowerCase().includes(input.toLowerCase())
            })
            setInput(input);
            setList(filtered);
         }
       
    return(<div>
        <Search input={input} onChange={updateInput} />
        <List productList={productList}/>
    </div>)
}

export default Products