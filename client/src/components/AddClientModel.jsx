import React, { useState } from 'react';
import { ADD_CLIENT } from '../mutation/clientMutation';
import { useMutation } from '@apollo/client';
import { GET_CLIENT } from '../quries/clientQuries';

const AddClientModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    },
    update(cache, { data: addClient }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENT,
      });
      cache.writeQuery({
        query: GET_CLIENT,
        data: {
          clients: [...clients, addClient],
        },
      });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === '' || formData.email === '' || formData.phone === '')
      return alert('Please Fill All Fields');
    addClient()
    setFormData({
        name: '',
        email: '',
        phone: '',
    })
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="rounded bg-orange-400 text-white px-4 py-2 "
        onClick={() => setIsOpen(true)}
      >
        Add Client
      </button>
      {isOpen && (
        <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-zinc-900 p-6 rounded shadow-lg w-[400px]">
            <h2 className="text-2xl mb-4 text-white">Add Client</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="border rounded bg-zinc-700 w-full py-2 px-3 text-white"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border rounded bg-zinc-700 w-full py-2 px-3 text-white"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="border rounded bg-zinc-700 w-full py-2 px-3 text-white"
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-orange-400 text-white px-4 py-2 "
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddClientModel;
