import React, { useState } from "react";
import sendImg from "../assets/send.png";
import Loading from "../assets/loader.gif";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "" || value === " ") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };

  return (
    <div className="flex w-full bg-white bg-opacity-10 max-h-40 rounded-lg p-4 overflow-auto relative">
      {loading ? (
        <img src={Loading} alt="loading" width={32}/>
      ) : (
        <textarea
          rows={1}
          type="text"
          className="border-0 bg-transparent outline-none w-11/12"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            e.keyCode === 13 && e.shiftKey === false && handleSubmit();
          }}
        />
      )}
      <img
        width={20}
        className="absolute top-4 right-4 hover:cursor-pointer ease-in duration-100 hover:scale-125 "
        src={sendImg}
        alt="send"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default ChatInput;
