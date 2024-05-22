const ProductRow = ({ name, price, color }) => {
  return (
    <div className="row">
      <div className={`col-4 p-3 text-center border-top text-${color}`}>{name}</div>
      <div className="col-4 p-3 text-center border-top">{price}</div>
    </div>
  );
};

export default ProductRow;
