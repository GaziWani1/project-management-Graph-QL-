import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_CLIENT } from "../mutation/clientMutation";

const TableRow = ({id , name , email , phone}) => {
 
  const [deleteClient] = useMutation(DELETE_CLIENT,{
    variables:{ id }
  })

  return <tr  className=" even:bg-slate-600 bg-slate-700 text-[16px] text-white">
  <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
      {name}
  </th>
  <td className="px-6 py-4">
      {email}
  </td>
  <td className="px-6 py-4">
      {phone}
  </td>
  <td className="px-6 py-4">
      <button onClick={deleteClient} className="px-3 py-2 rounded-md bg-orange-400 text-white">Delete</button>
  </td>
</tr>
};

export default TableRow;
