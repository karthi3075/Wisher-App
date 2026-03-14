import { useState } from "react";
import ReactConfetti from "react-confetti";
import { data } from "../data";

export default function Wisher() {
    const [no, setNo] = useState(false);
    const [yes, setYes] = useState(false);
    const [msg, setMsg] = useState("");
    const handleNo = () => {
        setNo(true);
        setYes(false);
        setMsg(data.NoMsg);
    }
    const handleYes = () => {
        setYes(true);
        setNo(false);
        setMsg(data.YesMsg);
    }

    const handleClick=()=>{
        setYes(false);
        setNo(false);
    }

    return (
        <div className="bg-gray-300"> 
            <div className="flex justify-center flex-col items-center w-screem h-screen">
                {(no || yes) &&
                    <div className="m-5 ">
                        <div className={`flex relative font-semibold md:text-2xl px-5 pr-10 ${yes ? "text-green-500 bg-green-300 " : "text-red-500 bg-red-100"} `}>
                            <p>{msg}</p>
                             <button className="absolute right-0 top-0 bottom-0 px-3 mb-2 flex items-center cursor-pointer text-red-500" onClick={handleClick}>x</button>
                        </div>
                    </div>
                }
                <ReactConfetti/>
                <div className="bg-blue-300 p-5 rounded text-white">
                    <div className=" text-center font-bold">
                        <h1 className="text-3xl bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-[length:200% 200%] bg-clip-text text-transparent animate-gradient animate-pulse">{data.title}</h1>
                        <h3 className="text-2xl mt-3  bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-[length:200% 200%] bg-clip-text text-transparent animate-gradient animate-pulse">{data.name}</h3>
                    </div>
                    <div className="mt-4">
                        <p className="mb-4 text-center">are you accept my wish</p>
                        <div className="flex justify-between">
                            <button className="px-4 py-1 bg-green-500 rounded cursor-pointer" onClick={handleYes}>Yes</button>
                            <button className="px-4 py-1 bg-red-500 rounded cursor-pointer hover:translate-20 duration-400" onClick={handleNo}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}