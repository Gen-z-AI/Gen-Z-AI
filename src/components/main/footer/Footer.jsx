import React, { useState, useEffect } from "react";
import { MdMicNone } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";

const Footer = ({ data, handlechange, handleClick, handlekey }) => {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    setIsListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      handlechange({ target: { value: speechToText } });
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };
  };

  useEffect(() => {
    window.addEventListener("keydown", handlekey);
    return () => {
      window.removeEventListener("keydown", handlekey);
    };
  }, []);

  return (
    <div className="w-full bg-white flex items-center relative">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Enter a prompt here"
          className="w-full break-normal outline-none h-16 px-4 rounded-full bg-gray-100 overflow-auto mb-5"
          value={data}
          onChange={handlechange}
          onKeyDown={handlekey}
          style={{ maxHeight: "80px" }} // Limiting the max height
        />
        <div className="flex text-2xl gap-2 items-center absolute right-5 top-1/3 transform -translate-y-1/2">
          <MdMicNone
            className={`text-2xl ${isListening ? "text-red-500" : ""}`}
            onClick={handleVoiceInput}
          />
          {data.length === 0 ? null : <LuSendHorizonal onClick={handleClick} />}
        </div>
      </div>
    </div>
  );
};

export default Footer;
