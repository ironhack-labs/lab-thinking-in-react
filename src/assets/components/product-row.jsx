function ProductRow({ name, price, stock }) {
  return (
    <div className="container-fluid d-flex direction-row justify-content-around w-100 p-0">
      <p className={`mb-0 w-100 text-center ${stock ? '' : 'text-danger'}`}>{name}</p>
      <p className="mb-0 w-100 text-center">{price}</p>
    </div>
  );
}

export default ProductRow;
