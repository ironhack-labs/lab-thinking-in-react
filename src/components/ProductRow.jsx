import './ProductRow.css';

export const ProductRow = ({ name, price }) => {
  return (
    <section className="productRow">
      <p>{name}</p>
      <p>{price}</p>
    </section>
  );
};
