import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import police from "../images/police.png";
import fire from "../images/fire.png";
import Health from "../images/Health.png";

const Home = () => {
  return (
    <main className=" bg-slate-400 min-h-screen p-4 flex flex-col justify-center items-center">
      <div className="text-3xl text-[#00df9a] text-center font-bold bg-slate-950 mb-7 p-4 w-full">
        <h1>EMERGENCY HELP DEPARTMENTS</h1>
        <Typed
          className=" md:text-5xl text-[#00df9a] sm:text-4xl text-xl font-bold md:pl-4 pl-2"
          strings={["POLICE", "FIRE", "HEALTH"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <div className="text-xl text-gray-500 text-center bg-white p-4 shadow-md  mb-5">
        <p>
          The proposed mobile app for the fire department serves as a crucial
          lifeline for our community, offering rapid and efficient access to
          emergency services with the simple touch of a button. By seamlessly
          connecting users to the emergency department, it empowers citizens to
          swiftly summon assistance during critical situations, such as fires,
          accidents, or medical emergencies, ensuring timely responses that can
          be the difference between life and death. Moreover, the app's
          integration of location services ensures that responders can pinpoint
          the caller's exact position, further expediting their arrival and
          potentially reducing response times. In this way, this app not only
          promotes community safety but also instills a sense of security,
          knowing that help is readily available when needed most.
        </p>
      </div>
      <div className="mb-4 w-full">
        <div className="flex flex-col justify-center items-center bg-white rounded-lg border p-2 shadow-md mb-5">
          <div className=" flex">
            <img
              className="w-10 rounded-full h-10 mr-2"
              src={police}
              alt="police department"
            />
            <h1 className="text-3xl text-gray-500">Police Department</h1>
            <Link to="/police">
              <button className="text-2xl font-semibold mt-4 border-2 px-2 rounded-md text-white py-2 bg-gray-900">
                <h1 className="">Select Department</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-white rounded-lg border p-2 shadow-md mb-5">
          <div className=" flex">
            <img
              className="w-10 rounded-full h-10 mr-2"
              src={fire}
              alt="fire department"
            />
          </div>
          <h1 className="text-3xl text-gray-500">Fire Department</h1>
          <Link to="/fire">
            <button className="text-2xl font-semibold mt-4 border-2 px-2 rounded-md text-white py-2 bg-gray-900">
              <h1 className="">Select Department</h1>
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-lg border p-2 shadow-md mb-5">
          <div className=" flex">
            <img
              className="w-10 rounded-full h-10 mr-2"
              src={Health}
              alt="health department"
            />
          </div>
          <h1 className="text-3xl text-gray-500">Hospital Department</h1>
          <Link to="/hospital">
            <button className="text-2xl font-semibold mt-4 border-2 px-2 rounded-md text-white py-2 bg-gray-900">
              <h1 className="">Select Department</h1>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
