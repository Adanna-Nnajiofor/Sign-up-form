import React from "react";
import User from "./user";

const Users = ({ data }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="divide-y divide-gray-200">
        {data.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
