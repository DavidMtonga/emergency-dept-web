import { useState } from "react";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // You can handle sending the message here or pass it to a parent component
    // for further processing.
    console.log(`Sending message: ${message}`);
    // Clear the input field after sending the message
    setMessage("");
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex space-x-2">
        <input
          className="border border-gray-400 w-full p-2 rounded"
          type="text"
          placeholder="Type your emergency situation and location..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSendMessage}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
