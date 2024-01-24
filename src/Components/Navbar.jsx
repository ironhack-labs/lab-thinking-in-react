function Navbar(props){
    function addElement(){
        const newBook = {name:"Iphone300", price:300,id:"infieoi"}
        props.setProducts([...props.products,newBook])
      }
    return(
    <div className="title">
   <div>Element counter: {props.products.length}</div> 
   <div> <button onClick={addElement}>Add future phone</button></div>
    </div>
    
    )
}
export default Navbar;