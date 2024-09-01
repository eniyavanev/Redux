import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../StateManagement/Slices/userSlice";

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    age: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(e);

    setInputs({ ...inputs, [name]: value });
  };

  const dispatch = useDispatch();
  //console.log(inputs);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(inputs));
    setInputs({ name: "", email: "", age: "", contact: "" });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <form className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              id="name"
              value={inputs.name}
              name="name"
              onChange={handleChange}
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              value={inputs.email}
              name="email"
              id="email"
              onChange={handleChange}
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
              placeholder="Name"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Email
            </label>
          </div>

          {/* Age Input */}
          <div className="relative">
            <input
              type="number"
              value={inputs.age}
              onChange={handleChange}
              name="age"
              id="age"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
              placeholder="Age"
            />
            <label
              htmlFor="age"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Age
            </label>
          </div>

          {/* Contact Input */}
          <div className="relative">
            <input
              type="number"
              id="contact"
              value={inputs.contact}
              onChange={handleChange}
              name="contact"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
              placeholder="Contact"
            />
            <label
              htmlFor="contact"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Contact
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <input
              type="button"
              value="Submit"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
