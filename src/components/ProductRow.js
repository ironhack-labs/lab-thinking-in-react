import React from 'react';

const ProductRow = ({name,price}) => {

  return (
     <div className='tc bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 flex w-30'>
         {name} {price}
     </div>
  );
}

export default ProductRow;

