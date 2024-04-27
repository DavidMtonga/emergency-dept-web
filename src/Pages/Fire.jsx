import { useState } from "react";
import ChatInput from "./ChatInput";
import fire from "../images/fire.png";

import {
  AiFillFacebook,
  AiFillGooglePlusCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import firefighter from "../assets/firefighter.webp";

const Fire = () => {
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
              src={fire}
              alt="fire department"
            />
          </div>
          <h1 className="text-white text-3xl flex font-bold">
            <span className=" text-orange-600">Fire</span>{" "}
            <div className=" text-blue-400"> Department</div>
          </h1>
        </div>
        <img
          src={firefighter}
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
        <ChatInput
          description={`When an emergency call is received, the fire department acts
          decisively, sending trained firefighters and equipment to the scene.
          These dedicated professionals work swiftly to contain fires, perform
          rescue operations, and provide critical assistance during accidents or
          disasters. Their quick response and expertise ensure the safety of
          lives and property, embodying the fire department&#39;s commitment to
          safeguarding communities in times of crisis.`}
        />
      </div>
      <div className="map-section">
        <div className="gmap-frame">
          <div width="100%">
            <iframe
              id="gmap_canvas"
              width="50%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Zambia,%20Lusaka+(Emergency%20Dept%20web)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
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
          src={fire}
          alt="fire department"
        />
        <span className="text-white text-xs">
          © {new Date().getFullYear()} Police Department
        </span>
      </div>
    </div>
  );
};

export default Fire;
