import { useState } from "react";

const ChatInput = ({ description, className }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // You can handle sending the message here or pass it to a parent component
    // for further processing.
    console.log(`Sending message: ${message}`);
    // Clear the input field after sending the message
    setMessage("");
  };

  return (
    <div className="container mx-auto mt-5 flex flex-col gap-4">
      <div className="flex space-x-2">
        <input
          className="border border-gray-400 w-full p-2 rounded"
          type="text"
          placeholder="Type your emergency situation and location..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSendMessage}
        >
          Send Alert!
        </button>
      </div>
      <p className={className}>{description}</p>
    </div>
  );
};

export default ChatInput;
