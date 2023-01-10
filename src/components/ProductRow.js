import products from '../data.json'

function ProductRow(){

    return(
     <div>
        {products.map((e) =>{

return (
<tr id='Product-row' key= {e.id} >

<section id='rows'>
    
<td className="Row-name">{e.name}</td>
<td className="Row-price">{e.price}</td>
        
</section>

</tr> )
})}
     </div>  
    )
 }

export default ProductRow;
