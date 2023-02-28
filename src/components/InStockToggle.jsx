export const InStockToggle = ({ inStockToggle, onlyInStock }) => {
  return (
    <input type="checkbox" checked={false} onChange={()=>inStockToggle(onlyInStock)} />
  );
};
