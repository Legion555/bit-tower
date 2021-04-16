import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'

const openSeaLogo = '/assets/opensea.png'

export default function SocialLinks() {
    return (
        <div className="absolute z-30 bottom-2 md:bottom-4 left-2 md:left-4 p-2 flex flex-col gap-2 md:gap-4 rounded-xl bg-gray-200 bg-opacity-50">
            <p className="text-xl md:text-2xl transform transition ease-in duration-300 hover:scale-110 cursor-pointer"
                ><AiFillTwitterCircle className="text-2xl md:text-4xl inline" /> Twitter</p>
            <p className="text-xl md:text-2xl transform transition ease-in duration-300 hover:scale-110 cursor-pointer"
                ><FaDiscord className="text-2xl md:text-4xl inline" /> Discord</p>
            <div className="flex items-center gap-2 transform transition ease-in duration-300 hover:scale-110 cursor-pointer">
                <div className="w-6 h-6 md:w-8 md:h-8 relative">
                    <img className="object-contain" src={openSeaLogo} alt="openSea logo"/>
                </div>
                <p className="text-xl md:text-2xl">OpenSea</p>
            </div>
        </div>
    )
}