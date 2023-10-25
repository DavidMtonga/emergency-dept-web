import police from "../../images/police.png";
import fire from "../../images/fire.png";
import Health from "../../images/Health.png";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="mb-4 w-full flex justify-evenly">
      <div className=" flex bg-white flex-col rounded-lg border p-2 shadow-md mb-5 ">
        <div className=" items-center justify-center w-full flex">
          <img
            className=" w-20 rounded-full h-20 mr-2"
            src={police}
            alt="police department"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-gray-500">Police Department</h1>
          <Link to="/police">
            <button className="text-2xl font-semibold mt-4 border-2 px-2 rounded-md text-white py-2 bg-gray-800 hover:bg-slate-900">
              <h1 className="">Select Department</h1>
            </button>
          </Link>
        </div>
      </div>
      <div className=" flex bg-white flex-col rounded-lg border p-2 shadow-md mb-5 ">
        <div className=" items-center justify-center w-full flex">
          <img
            className="w-20 rounded-full h-20 mr-2"
            src={fire}
            alt="fire department"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-gray-500">Fire Department</h1>
          <Link to="/fire">
            <button className="text-2xl font-semibold mt-4 border-2 px-2 rounded-md text-white py-2 hover:bg-slate-900 bg-gray-800">
              <h1 className="">Select Department</h1>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex bg-white flex-col rounded-lg border p-2 shadow-md mb-5 ">
        <div className=" items-center justify-center w-full flex">
          <img
            className="w-20 rounded-full h-20 mr-2"
            src={Health}
            alt="police department"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-gray-500">Health Department</h1>
          <Link to="/hospital">
            <button className="text-2xl font-semibold mt-4 border-2 px-2 rounded-md text-white py-2 hover:bg-slate-900 bg-gray-800">
              <h1 className="">Select Department</h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
