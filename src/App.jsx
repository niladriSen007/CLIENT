import React, { useState } from "react";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";
import {useMutation} from "react-query"
import { fetchResponse } from "./api";

const App = () => {

  const [chat,setChat] = useState([])

  const mutation = useMutation({
    mutationFn:()=>{
      return fetchResponse(chat)
    },
    onSuccess:data=>setChat(prev=>[...prev,{sender:"ai",message:data.message.replace(/^\n\n/,"")}])
  })

  const sendMessage = async(message) =>{
    await Promise.resolve(setChat(prev=>[...prev,message]))
    mutation.mutate()
  }

  return (
    <div className="bg-[#1A232E] h-screen w-screen py-6 relative sm:px-28 px-4 text-white overflow-hidden flex flex-col justify-between align-middle">

      {/* gradients */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>

      {/* //header */}
      <div className="uppercase font-bold text-3xl text-center mb-3 text-blue-200 cursor-pointer hover:text-blue-300 duration-300">ChatGpt 2.0</div>

      {/* body */}
      <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 self-center px-2"> <ChatBody chat={chat} /></div>

      {/* query */}
      <div className="w-full max-w-4xl min-w-[20rem] self-center"><ChatInput sendMessage={sendMessage} loading={mutation.isLoading}/></div>
    </div>
  );
};

export default App;
