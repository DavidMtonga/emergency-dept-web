import { useState } from "react";
import ChatInput from "./ChatInput";
import police from "../images/police.png";
import {
  AiFillFacebook,
  AiFillGooglePlusCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import body from "../assets/body.jpg";

const Police = () => {
  const phoneNumbers = ["0976001612", "987-654-3210", "555-123-4567", "991"];
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
        <div className=" z-10 flex-col py-24 flex bg-slate-950 bg-opacity-80 w-full items-center justify-center">
          <img
            className=" w-64 h-64 rounded-full mt-10"
            src={police}
            alt="police department"
          />
          <h1 className="text-white text-3xl flex font-bold">
            <span className=" text-red-600">Pol</span>ice Department
          </h1>
        </div>
        <img
          src={body}
          alt="hero"
          loading="lazy"
          className="absolute object-cover h-full z-0 w-full"
        />
      </div>
      {/* Number generator */}
      <div className="grid py-12 grid-cols-2 items-center justify-center w-full px-4 md:px-10">
        <div>
          <h1 className="text-2xl font-semibold mb-3">
            Emergency Phone Number Generator
          </h1>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={generateRandomNumber}
          >
            Generate Number
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
        <ChatInput />
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
          src={police}
          alt="police department"
        />
        <span className="text-white text-xs">
          © {new Date().getFullYear()} Police Department
        </span>
      </div>
    </div>
  );
};

export default Police;
