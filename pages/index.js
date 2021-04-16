import {useState, useEffect} from 'react'
import Head from 'next/head'
//components
import Intro from '../components/Intro'
import Background from '../components/Background'
import CloudContainer from '../components/Clouds'
import Building from '../components/Building'
import ViewRoom from '../components/ViewRoom'
import Car from '../components/Car'
import Tree from '../components/Tree'
import SocialLinks from '../components/SocialLinks'
import Audio from '../components/Audio'


export default function Home() {
  const [isEntered, setIsEntered] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState();

  const [isViewRoom, setIsViewRoom] = useState(false);
  const [roomImgUrl, setRoomImgUrl] = useState(null);  

  useEffect(() => {
    let today = new Date();
    let hour = today.getHours();
    console.log(hour)
    if (0 <= hour && hour < 6) {
      return setTimeOfDay('night');
    } else if (5 < hour && hour < 19) {
      return setTimeOfDay('midday');
    // } else if (8 < hour && hour < 11) {
    //   return setTimeOfDay('sunrise');
    // } else if (11 < hour && hour < 16) {
    //   return setTimeOfDay('midday');
    // } else if (16 < hour && hour < 19) {
    //   return setTimeOfDay('sunset');
    } else if (19 < hour && hour < 24) {
      return setTimeOfDay('night');
    }
  }, [])  

  return (
    <div>
      <Head>
        <title>Bit Tower</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen relative overflow-hidden">
        {!isEntered && <Intro setIsEntered={setIsEntered} /> }
        <Background timeOfDay={timeOfDay} setTimeOfDay={setTimeOfDay} />

        <Building timeOfDay={timeOfDay} setIsViewRoom={setIsViewRoom} setRoomImgUrl={setRoomImgUrl} />
        {isViewRoom &&
          <ViewRoom timeOfDay={timeOfDay} setIsViewRoom={setIsViewRoom} roomImgUrl={roomImgUrl} setRoomImgUrl={setRoomImgUrl} />
        }

        {/* <Car isEntered={isEntered} />
        <Tree /> */}
        {isEntered && <CloudContainer /> }
        {isEntered && <Audio /> }

        <SocialLinks />
      </div>
    </div>
  )
}
