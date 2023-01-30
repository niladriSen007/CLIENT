export const fetchResponse = async(chat) =>{
    try
    {
        const res = await fetch("https://server-mu-seven.vercel.app/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                message:chat.map(message=>message.message).join("\n")
            })
        })
        const data = await res.json();
        return data
    }
    catch(e)
    {
        console.log(e)
    }
}