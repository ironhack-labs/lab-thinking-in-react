import React from "react";

export default function ProductRow(props) {
  return (
    <div className="uk-margin-remove">
      <table className="uk-table uk-table-small uk-margin-remove">
        <tbody>
          <tr>
            <td className="uk-text-center">{props.product.name}</td>
            <td className="uk-text-center">{props.product.price}</td>
          </tr>
        </tbody>
      </table>
      <hr className="uk-margin-remove" />
    </div>
  );
}
