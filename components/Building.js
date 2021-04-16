//exterior
const Wall = '/assets/building/wall.png';
const BottomWall = '/assets/building/bottomWall.png';
const BottomSection = '/assets/building/bottomSection.png'
//rooms
const room1_lightsOff = '/assets/building/room1_lightsOff.png'
const room1_lightsOn = '/assets/building/room1_lightsOn.png'
const room2_lightsOff = '/assets/building/room2_lightsOff.png'
const room2_lightsOn = '/assets/building/room2_lightsOn.png'
const room3_lightsOff = '/assets/building/room3_lightsOff.png'
const room3_lightsOn = '/assets/building/room3_lightsOn.png'
const room4_lightsOff = '/assets/building/room4_lightsOff.png'
const room4_lightsOn = '/assets/building/room4_lightsOn.png'
const room5_lightsOff = '/assets/building/room5_lightsOff.png'
const room5_lightsOn = '/assets/building/room5_lightsOn.png'
const room6_lightsOff = '/assets/building/room6_lightsOff.png'
const room6_lightsOn = '/assets/building/room6_lightsOn.png'
const lobbyLightsOff = '/assets/building/lobbyLightsOff.png'
const lobbyLightsOn = '/assets/building/lobbyLightsOn.png'



export default function Building({timeOfDay, setIsViewRoom, setRoomImgUrl}) {

    const viewRoom = (roomImgUrlDay, roomImgUrlNight) => {
        setIsViewRoom(true);
        if (timeOfDay === 'midday') {
            setRoomImgUrl(roomImgUrlDay)
        } else {
            setRoomImgUrl(roomImgUrlNight)
        }
    }

    return (
        <div className="w-64 md:w-80 h-5/6 absolute z-20 left-1/2 transform -translate-x-1/2 bottom-0 flex flex-col justify-end">
            {timeOfDay === 'midday' && <img className="w-full" src={'/assets/building/roofTopLightsOff.png'} alt="rooftop" /> }
            {timeOfDay === 'night' && <img className="w-full" src={'/assets/building/roofTopLightsOn.png'} alt="rooftop" /> }
            <div className="w-full relative">
                <img className="object-fit" src={'/assets/building/topSection.png'} alt="building top" />
            </div>
            <Room timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room6_lightsOff} backgroundImgNight={room6_lightsOn} cta={() => viewRoom(room6_lightsOff, room6_lightsOn)} />
            <Room timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room5_lightsOff} backgroundImgNight={room5_lightsOn} cta={() => viewRoom(room5_lightsOff, room5_lightsOn)} />
            <Room timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room4_lightsOff} backgroundImgNight={room4_lightsOn} cta={() => viewRoom(room4_lightsOff, room4_lightsOn)} />
            <Room timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room3_lightsOff} backgroundImgNight={room3_lightsOn} cta={() => viewRoom(room3_lightsOff, room3_lightsOn)} />
            <Room timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room2_lightsOff} backgroundImgNight={room2_lightsOn} cta={() => viewRoom(room2_lightsOff, room2_lightsOn)} />
            <Room timeOfDay={timeOfDay} borderImg={Wall} backgroundImgDay={room1_lightsOff} backgroundImgNight={room1_lightsOn} cta={() => viewRoom(room1_lightsOff, room1_lightsOn)} />
            <Room timeOfDay={timeOfDay} borderImg={BottomWall} backgroundImgDay={lobbyLightsOff} backgroundImgNight={lobbyLightsOn} cta={() => viewRoom(lobbyLightsOff, lobbyLightsOn)} />
            <img className="w-full transform scale-x-105" src={BottomSection} alt="building bottom" />
        </div>
    )
}

const Room = ({timeOfDay, borderImg, backgroundImgDay, backgroundImgNight, cta}) => {
    const parseBackgroundImg = () => {
        switch (timeOfDay) {
            case 'midday':
                return backgroundImgDay;
            case 'night':
                return backgroundImgNight;
            default:
                return null;
        }
    }

    const wallStyle = {
        border: '5px solid rgba(0,0,0,0.01)',
        borderImage: `url(${borderImg}) 30 round`,
        backgroundImage: `url(${parseBackgroundImg()})`,
        backgroundSize: 'cover'
    }

    return (
        <div style={wallStyle} className="w-full h-20 md:h-24 border-t-2 border-r-2 border-l-2 border-gray-800 hover:opacity-75 cursor-pointer"
            onClick={cta} />
    )
}