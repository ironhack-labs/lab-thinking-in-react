import React from "react";

const FormDisplay = ({ onChange }) => {
  return (
    <div>
      <form>
        <input onChange={onChange}>

        </input>
      </form>
    </div>
  );
}
export default FormDisplay
