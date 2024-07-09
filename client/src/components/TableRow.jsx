import { useMutation } from '@apollo/client';
import React from 'react';
import { DELETE_CLIENT } from '../mutation/clientMutation';
import { GET_CLIENT } from '../quries/clientQuries';

const TableRow = ({ id, name, email, phone }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id },
    // refetchQueries:[{query:GET_CLIENT}],
    update(cache, { data: { deleteClient } }) {
      const {clients} = cache.readQuery({
        query : GET_CLIENT
      });
      cache.writeQuery({
        query:GET_CLIENT,
      data : {
        clients : {
          clients: clients.filter(client => client.id !== deleteClient.id)
        }
      }
      })
    },
  });

  return (
    <tr className=" even:bg-zinc-900 bg-zinc-800 text-[16px] text-white">
      <th
        scope="row"
        className="px-6 py-4 font-medium  whitespace-nowrap text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{phone}</td>
      <td className="px-6 py-4">
        <button
          onClick={deleteClient}
          className="px-3 py-2 rounded-md bg-orange-400 text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
