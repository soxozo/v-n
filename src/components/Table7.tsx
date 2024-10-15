import React from 'react'

function Table7() {
  return (
<div className="min-h-screen bg-red-800 py-5">
  <div className="overflow-x-auto w-full">
    <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
      <thead className="bg-gray-900">
        <tr className="text-white text-left">
          <th className="font-semibold text-sm uppercase px-6 py-4">Name</th>
          <th className="font-semibold text-sm uppercase px-6 py-4">Designation</th>
          <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Status</th>
          <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Role</th>
          <th className="font-semibold text-sm uppercase px-6 py-4"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="inline-flex w-10 h-10">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  alt="User avatar"
                  src="https://i.imgur.com/siKnZP2.jpg"
                />
              </div>
              <div>
                <p>Mira Rodeo</p>
                <p className="text-gray-500 text-sm font-semibold tracking-wide">mirarodeo23@mail.com</p>
              </div>
            </div>
          </td>
          <td className="px-6 py-4">
            <p>Software Developer</p>
            <p className="text-gray-500 text-sm font-semibold tracking-wide">Development</p>
          </td>
          <td className="px-6 py-4 text-center">
            <span className="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full">Active</span>
          </td>
          <td className="px-6 py-4 text-center">Developer</td>
          <td className="px-6 py-4 text-center">
            <a href="#" className="text-purple-800 hover:underline">
              Edit
            </a>
          </td>
        </tr>
        {/* Repeat for other rows */}
      </tbody>
    </table>
  </div>
</div>


  );
};

export default Table7