import React, { useEffect, useRef } from "react";
import autoAnimate  from "@formkit/auto-animate"

const ChatBody = ({ chat }) => {
  const aiStyle = `bg-white bg-opacity-20 backdrop-blur-lg dropshadow-md max-w-[60%]  mr-auto word-wrap `;

    const parent = useRef(null)
    const bottomRef = useRef(null)


    //for auto animation
    useEffect(()=>{
        parent.current && autoAnimate(parent.current)
    },[parent])

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior:"smooth"})
    },[chat])

  return (
    <div className="flex flex-col gap-4 text-base  md:text-lg " ref={parent}>
      {/* client messages */}
      {chat.map((message, index) => (
        <div
          className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 max-w-[80%] py-3 ${
            message.sender === "ai" && aiStyle
          }`}
          key={index}
        >
          <pre className="whitespace-pre-wrap">
            <span>{message.message}</span>
          </pre>
        </div>
      ))}
    <div className="h-3" ref={bottomRef}></div>
    </div>
  );
};

export default ChatBody;
