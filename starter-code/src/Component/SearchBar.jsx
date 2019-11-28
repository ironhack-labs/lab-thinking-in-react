import React from 'react';
export default function SearchBar({ clbk }) {
  return (
    <div>
      <input className="input" type="text" onChange={clbk} />
    </div>
  );
}
