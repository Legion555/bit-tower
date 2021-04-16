import {useState} from 'react'

export default function Intro({setIsEntered}) {
    const [isFading, setIsFading] = useState(false);

    const fadeOut = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsEntered(true);
        }, 12e2)
    }

    return (
        <div className={`w-full h-screen absolute top-0 left-0 z-40 flex justify-center items-center
            transition-all ease-in duration-1000 ${isFading ? 'backdropFilter-false' : 'backdropFilter-true'}`} onClick={fadeOut}  >
            <div className={`w-max h-max flex flex-col justify-center items-center
                transition ease-in duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                <h1 className="mb-4 text-8xl text-gray-200 bg-gray-800 px-16 py-8 border-2 border-gray-200">Logo</h1>
                <button className="text-3xl p-2 text-gray-800 bg-gray-200 rounded-xl cursor-pointer transform transition ease-in duration-300 hover:scale-110">Explore the tower</button>
            </div>
        </div>
    )
}