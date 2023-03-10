function ProductRow({ produto }){
   
            return (
                <tr>
                    {produto.inStock ? <td>{produto.name}</td> : <td className='red'>{produto.name}</td>}
                    <td>{produto.price}</td>
                    
                </tr>
                );

}
export default ProductRow