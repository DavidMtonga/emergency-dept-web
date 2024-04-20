import React from "react";
import { useState } from "react";
import ChatInput from "./ChatInput";
import Health from "../images/Health.png";
import {
  AiFillFacebook,
  AiFillGooglePlusCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import doctorprof from "../assets/doctorprof.webp";

const Hospital = () => {
  const phoneNumbers = ["0976001612", "987-654-3210", "555-123-4567"];
  const [generatedNumber, setGeneratedNumber] = useState("");

  const generateRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
    const randomNumber = phoneNumbers[randomIndex];
    setGeneratedNumber(randomNumber);
  };
  const callNumber = () => {
    if (generatedNumber) {
      window.location.href = `tel:${generatedNumber}`;
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className=" relative flex-col flex items-center justify-center overflow-hidden">
        <div className=" z-10 flex-col py-24 flex bg-slate-950 bg-opacity-60 w-full items-center justify-center">
          <div className="">
            <img
              className=" w-full h-full object-cover rounded-full"
              src={Health}
              alt="health department"
            />
          </div>
          <h1 className="font-bold text-blue-500 text-3xl">
            Health Department
          </h1>
        </div>
        <img
          src={doctorprof}
          alt="hero"
          loading="lazy"
          className="absolute object-cover h-full z-0 w-full"
        />
      </div>
      {/* Number generator */}
      <div className=" grid grid-cols-2  md:px-10 px-4">
        <div>
          <h1 className="text-2xl text-gray-600 font-semibold mb-3">
            Emergency Phone Number Generator
          </h1>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={generateRandomNumber}
          >
            Generate Phone Number
          </button>
          <input
            className="mt-3 p-2 border border-gray-400 rounded"
            type="text"
            readOnly
            value={generatedNumber}
          />
          {/* call Number */}
          <div className="p-4">
            {generatedNumber && (
              <div className="mb-4">
                <p className="text-lg font-bold">Generated Phone Number:</p>
                <p>{generatedNumber}</p>
              </div>
            )}
            {generatedNumber && (
              <div>
                <button
                  onClick={callNumber}
                  className="bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Call
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <ChatInput
            description={`When an emergency call comes in, the health department swiftly
            deploys an ambulance to provide life-saving assistance. Trained
            paramedics and emergency medical personnel respond to the scene,
            delivering critical care and transportation to medical facilities
            when needed. The health department's rapid response to emergency
            calls ensures that individuals in distress receive prompt and
            professional medical assistance, prioritizing their well-being and
            saving lives.`}
          />
        </div>
      </div>
      <div className=" flex text-5xl justify-center gap-8 py-3 text-gray-600">
        <AiFillLinkedin />
        <AiFillFacebook />
        <AiFillGooglePlusCircle />
      </div>
      {/* Footer */}
      <div className=" bg-green-300 p-2 flex items-center justify-center">
        <img
          className="w-10 rounded-full h-10 mr-2"
          src={Health}
          alt="health department"
        />
        <span className="text-gray-600 font-semibold text-xs">
          © {new Date().getFullYear()} Health Department
        </span>
      </div>
    </div>
  );
};

export default Hospital;
