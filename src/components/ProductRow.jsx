
function ProductRow(props){
  
    return(
        <div>
            <table style={{border:'1px solid', fontFamily: "Sans-Serif", width: '1000px', height:'500px', margin: 'auto', paddingLeft: '0px', paddingRight:'0px'}}>
                <thead style={{backgroundColor: '#A1CDDC',fontSize: '24px', textTransform: 'uppercase',letterSpacing: '0.03em' }} >  
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:'#E7F7FC', border: '1px solid #0B7597', fontSize:'20px' }}>
               
                
                {props.productchild.map((oneProduct)=>{
                    return (
                    <tr style={{}}>
                      {oneProduct.inStock ?  <td style={{color:"black",border:'1px solid #0B7597',margin:'0px' }}>{oneProduct.name}</td> : <td style={{color:"red", border:'1px solid #0B7597', margin:'0px'}}>{oneProduct.name}</td>}
                        
                        <td style={{border:'1px solid #0B7597', margin:'0px'}}>{oneProduct.price}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        
         )
}

export default ProductRow;