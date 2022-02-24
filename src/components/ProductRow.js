function ProductRow (props) {
    

     let list = props.productsProp
     .filter(product => product.name.toLowerCase().includes(props.searchProp.toLowerCase()))
        console.log('list:',list);
    
    if (props.checkedProp) {
        list = list.filter(product => product.inStock === true)
    }

    console.log('checked2: ', props.checkedProp);
    console.log('search2: ', props.searchProp);  

   
    const filteredList = list.map(product => {
        return(     
            <tr key={product.id}>
                <th style={product.inStock ? {color:'white'} : {color:'red'} }>{product.name}</th>
                <th>{product.price}</th>
            </tr>                          
        )        
    })

    return (
        <>{filteredList}</>
    )
    
  }
  
  export default ProductRow;