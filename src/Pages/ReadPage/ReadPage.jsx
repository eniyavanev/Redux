import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../StateManagement/Slices/userSlice";

const ReadPage = () => {
  const users = useSelector((state) => state.userInfo.users);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gradient-to-br from-blue-50 to-white shadow-2xl rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">
        User List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Name: {user.name}
            </h3>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Age:</span> {user.age}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Contact:</span> {user.contact}
            </p>
            <button
              className="w-full py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-md hover:from-red-500 hover:to-red-700 transition duration-200 font-medium"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadPage;
