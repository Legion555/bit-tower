import {AiFillCloseCircle, AiOutlineShoppingCart} from 'react-icons/ai'

export default function ViewRoom({timeOfDay, setIsViewRoom, roomImgUrl, setRoomImgUrl}) {

    return (
        <div className="w-full h-full absolute z-40 flex justify-center items-center">
            <div className="w-full h-full absolute bg-gray-800 bg-opacity-50" onClick={() => setIsViewRoom(false)} />
            <div className={`w-[367px] h-[150px] md:w-[733px] md:h-[250px] xl:w-[1100px] xl:h-[350px] relative flex flex-col items-center`}>
                <div className={`w-[367px] h-[100px] md:w-[733px] md:h-[200px] xl:w-[1100px] xl:h-[300px] relative ${timeOfDay !== 'night' ? 'bg-gray-100' : 'bg-gray-800'}`}>
                    <img className="w-object-contain" src={roomImgUrl} alt="room image" />
                    <AiFillCloseCircle className="absolute top-4 right-8 text-3xl text-red-800 cursor-pointer" onClick={() => setIsViewRoom(false)} />
                </div>
                <button className="mt-4 px-4 py-2 rounded-xl text-3xl text-white bg-blue-600 hover:bg-blue-400">
                    <AiOutlineShoppingCart className="inline" /> Purchase on OpenSea</button>
            </div>
        </div>
    )
}