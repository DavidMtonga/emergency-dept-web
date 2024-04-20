import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nrc, setNrc] = useState("");
  const [address, setAddress] = useState("");

  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:8000/");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        name,
        password,
        nrc,
        address,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center w-full min-h-screen py-32 justify-center px-3">
      <div className="flex justify-center text-center w-full text-xl my-4">
        <p className="text-gray-900 font-semibold">
          Welcome to your Emergency support{" "}
          <span>
            <Link to="/" className="underline pl-1 font-bold">
              System
            </Link>
          </span>
          <span>{data}</span>
        </p>
      </div>
      <div className="flex flex-col border shadow-xl gap-2 md:gap-3 p-4 rounded-md w-full lg:max-w-md">
        <h1 className=" text-left font-bold text-gray-900 text-lg">Register</h1>
        <form className=" grid gap-3">
          <div className="flex flex-col w-full items-center">
            <input
              placeholder="Name"
              type="name"
              name="name"
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Email Input */}
          <div className="flex flex-col w-full items-center">
            <input
              placeholder="Email"
              type="email"
              name="email"
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Phone no Input */}
          <div className="flex flex-col w-full items-center">
            <input
              placeholder="Mobile +260..."
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* NRC No Input */}
          <div className="flex flex-col w-full items-center">
            <input
              placeholder="NRC no.."
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
              onChange={(e) => setNrc(e.target.value)}
            />
          </div>
          {/* Residential address Input */}
          <div className="flex flex-col w-full items-center">
            <input
              placeholder="Residential address"
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </form>

        {/*Create Account Button */}
        <Link to="/Home">
          <button
            onClick={login}
            className="flex justify-center font-semibold items-center gap-2 border-2 px-2 rounded-md text-white py-2 w-full bg-gray-900"
          >
            <h1>Submit</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}
