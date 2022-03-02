import React from 'react';


const ProductTable = (props) => {

    console.log(props)
	const ProductRow = props.list.map(movie => <h3 key={products._id}>{products.name},{products.category},{products.price},{products.inStock}</h3>)
	return (
		<>
			<div>ProductRow</div>
			{/* {props.list.map(products => (<h3>{product.title}</h3>))} */}
			{/* {productRow} */}
			{props.list.map(products => (
				<ProductRow key={products._id} product={products} />
			))}
		</>
	)
  }
 export default ProductTable;
//   console.log(props.products);

  

//   return (
//     <>
//       <h1>producttable</h1>
//     </>
//   );
// };


