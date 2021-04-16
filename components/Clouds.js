import {useState} from 'react'



export default function CloudContainer() {
    const SmallCloud1 = '/assets/clouds/SmallCloud1.png'; const SmallCloud2 = '/assets/clouds/SmallCloud2.png'; const SmallCloud3 = '/assets/clouds/SmallCloud3.png';
    const MediumCloud1 = '/assets/clouds/MediumCloud1.png'; const MediumCloud2 = '/assets/clouds/MediumCloud2.png'; const MediumCloud3 = '/assets/clouds/MediumCloud3.png';
    const LargeCloud1 = '/assets/clouds/LargeCloud1.png'; const LargeCloud2 = '/assets/clouds/LargeCloud2.png'; const LargeCloud3 = '/assets/clouds/LargeCloud3.png';
    // eslint-disable-next-line
    const [cloudArray, setCloudArray] = useState([
      {posX: 0, posY: 10, imgSrc: LargeCloud1},
      {posX: 15, posY: 6, imgSrc: SmallCloud2},
      {posX: 20, posY: 2, imgSrc: LargeCloud3},
      {posX: 25, posY: 9, imgSrc: SmallCloud2},
      {posX: 30, posY: 4, imgSrc: LargeCloud2},
      {posX: 35, posY: 15, imgSrc: MediumCloud3},
      {posX: 55, posY: 4, imgSrc: MediumCloud2},
      {posX: 60, posY: 13, imgSrc: SmallCloud1},
      {posX: 70, posY: 7, imgSrc: LargeCloud3},
      {posX: 75, posY: 9, imgSrc: SmallCloud3},
      {posX: 80, posY: 3, imgSrc: MediumCloud3},
      {posX: 90, posY: 14, imgSrc: SmallCloud3}
    ])

    const parseCloudSize = (imgSrc) => {
      switch (imgSrc) {
        case LargeCloud1: case LargeCloud2: case LargeCloud3:
          return 'w-60 h-48';
        case MediumCloud1: case MediumCloud2: case MediumCloud3:
          return 'w-48 h-32';
        case SmallCloud1: case SmallCloud2: case SmallCloud3:
          return 'w-18 h-12';
        default:
          return null;
      }
    }

    return (
      <>
      <div className="w-full h-full absolute z-10 animate-cloudsLeft">
        {cloudArray.map(cloud => 
          <Cloud key={Math.floor(Math.random() * 100000)} posX={cloud.posX} posY={cloud.posY} imgSrc={cloud.imgSrc} cloudSize={parseCloudSize(cloud.imgSrc)} />
          )}
      </div>
      <div className="w-full h-full absolute -right-full animate-cloudsLeft2">
        {cloudArray.map(cloud => 
          <Cloud key={Math.floor(Math.random() * 100000)} posX={cloud.posX} posY={cloud.posY} imgSrc={cloud.imgSrc} cloudSize={parseCloudSize(cloud.imgSrc)} />
          )}
      </div>
      </>
    )
  }

const Cloud = ({posX, posY, imgSrc, cloudSize}) => {

  return (
    <img className={`${cloudSize} absolute object-contain`} style={{left: `${posX}%`, top: `${posY}%`}} src={imgSrc} alt="cloud" />
  )
}