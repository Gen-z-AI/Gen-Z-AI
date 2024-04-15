import React from "react";
import { MdMicNone } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";

const Footer = ({ data, handleVoiceInput, handleClick, handlechange, handlekey, isListening }) => {
  return (
    <div className="w-12/12 bg-white flex items-center relative">
      <input
        type="text"
        placeholder="Enter a prompt here"
        className="w-full break-normal flex-1 outline-none h-16 ps-3 rounded-full"
        style={{ background: "#F0F4F9" }}
        value={data}
        onChange={handlechange}
        onKeyDown={handlekey}
      />
      <div className="flex text-2xl gap-2 items-center absolute right-5">
        <MdMicNone className={`text-2xl ${isListening ? "text-red-500" : ""}`} onClick={handleVoiceInput} /> {/* Apply red color when isListening is true */}
        {data.length === 0 ? null : <LuSendHorizonal onClick={handleClick} />}
      </div>
    </div>
  );
};

export default Footer;
