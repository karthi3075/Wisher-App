import ReactConfetti from "react-confetti";

export default function Wish(){
    return(
        <div className="h-screen flex justify-center items-center w-screen bg-gray-500">
            <ReactConfetti/>
            <div className="p-3 bg-blue-100 rounded-md flex flex-col gap-3 items-center">
                <img src="/photo.jpg" alt="" />
                <audio controls autoPlay loop>
                    <source src="/song.mp3" type="audio/mpeg" autoPlay/>
                </audio>
                <h1 className="text-2xl font-bold text-center text-blue-400">Happy Birth Day</h1>
            </div>
        
        </div>
    )
}

