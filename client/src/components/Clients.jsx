import { useQuery, gql } from '@apollo/client';
import { GET_CLIENT } from '../quries/clientQuries';
import TableRow from './TableRow';
import { Spinner } from './Spinner';

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENT);

  if (error) return <h1 className="text-white">some thing went wrong</h1>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
      <div className="relative overflow-x-auto rounded-md">
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full text-sm text-left rtl:text-right ">
            <thead className="text-xs  text-white uppercase  bg-zinc-900">
              <tr className="text-[16px]">
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client) => (
                <TableRow
                  key={client.id}
                  id={client.id}
                  name={client.name}
                  email={client.email}
                  phone={client.phone}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div></div>
    </div>
  );
};
