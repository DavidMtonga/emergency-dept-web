import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex items-center w-full h-screen justify-center px-3">
      <div className="flex flex-col shadow-xl gap-2 md:gap-3 p-4 rounded-md">
        <h1 className="text-3xl text-left font-bold text-gray-900">
          Registration
        </h1>
        <p className="text-lg text-left font-semibold text-gray-500">
          Enter your full registration details and contacts.
        </p>
        {/* Divider */}
        <div className="flex items-center w-full py-1">
          <div className="bg-gray-400 h-[2px] w-full flex"></div>
          <div className="bg-gray-400 h-[2px] w-full flex"></div>
        </div>
        <form>
          <div className="flex flex-col w-full items-center">
            <p className="text-lg pb-2 w-full text-left font-bold text-gray-900">
              Name
            </p>
            <input
              placeholder="First Name"
              type="name"
              name="name"
              className="w-full mb-2 px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
            />
            <input
              placeholder="Last Name"
              type="name"
              name="name"
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
            />
          </div>
          {/* Phone no Input */}
          <div className="flex flex-col w-full items-center">
            <p className="text-lg pb-2 w-full text-left font-bold text-gray-900">
              {" "}
              Mobile number
            </p>
            <input
              placeholder="+260"
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
            />
          </div>
          {/* NRC No Input */}
          <div className="flex flex-col w-full items-center">
            <p className="text-lg pb-2 w-full text-left font-bold text-gray-900">
              {" "}
              NRC number
            </p>
            <input
              placeholder="NRC no"
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
            />
          </div>
          {/* Residential address Input */}
          <div className="flex flex-col w-full items-center">
            <p className="text-lg pb-2 w-full text-left font-bold text-gray-900">
              {" "}
              Residential address
            </p>
            <input
              placeholder="Enter residential address"
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
            />
          </div>
          {/* Email Input */}
          <div className="flex flex-col w-full items-center">
            <p className="text-lg pb-2 w-full text-left font-bold text-gray-900">
              Email
            </p>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              className="w-full px-4 py-2 placeholder:text-gray-800 text-gray-900 border-2 focus:outline-none bg-gray-200 border-gray-400 rounded-md"
            />
          </div>
        </form>
        {/* Error(validation) */}
        <div>
          <p className=" font-semibold text-gray-500 text-lg">
            Please insure correct details.
          </p>
          <p className=" font-semibold text-gray-500 text-lg mb-1">
            Submition is only once.
          </p>
        </div>

        {/*Create Account Button */}
        <Link to="home">
          <button className="flex justify-center font-semibold items-center gap-2 border-2 px-2 rounded-md text-white py-2 bg-gray-900">
            <h1>Submit</h1>
          </button>
        </Link>
        <div className="flex justify-center w-full">
          <p className="text-gray-900 font-semibold">
            Welcome to your Emergency support
          </p>
          <Link to="/home" className="underline pl-1 font-bold">
            System
          </Link>
        </div>
      </div>
    </div>
  );
}
