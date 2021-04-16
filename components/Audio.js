import { useState, useEffect } from 'react'
//icons
import {GoMute} from 'react-icons/go'
//audio
import {Howl, Howler} from 'howler';



export default function Audio() {
    const [isMuted, setIsMuted] = useState(false);
  
    useEffect(() => {
      // eslint-disable-next-line
      let bg_audio = new Howl({
        src: '/assets/bg_music.mp3',
        autoplay: true,
        loop: true,
        volume: 0.3
      });
    }, [])
    
    const toggleMute = () => {
      if (isMuted) {
        Howler.volume(0.3);
        return setIsMuted(false);
      }
      setIsMuted(true);
      return Howler.volume(0);
    }
  
    return (
      <Icon toggleMute={toggleMute} isMuted={isMuted} />
    )
  }
  
  const Icon = ({toggleMute, isMuted}) => {
    return (
        <div className="absolute z-30 bottom-4 right-8 flex justify-center items-center">
            {!isMuted ?
            <svg className="transform rotate-180" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" onClick={() => toggleMute()}>
                <rect className="eq-bar eq-bar--1" x="4" y="4" width="3.7" height="16"/>
                <rect className="eq-bar eq-bar--2" x="10.2" y="4" width="3.7" height="32"/>
                <rect className="eq-bar eq-bar--3" x="16.3" y="4" width="3.7" height="22"/>
            </svg>
            :
            <GoMute className="text-4xl" onClick={() => toggleMute()} />
            }
        </div>
        
    )
  }