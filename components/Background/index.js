


export default function Background({timeOfDay, setTimeOfDay}) {

    const genBgColor = () => {
      switch (timeOfDay) {
        case 'dawn':
          return 'bg-gradient-to-b from-blue-800 to-yellow-100';
        case 'sunrise':
          return 'bg-gradient-to-b from-blue-600 to-yellow-200';
        case 'midday':
          return 'bg-gradient-to-b from-blue-400 to-blue-400';
        case 'sunset':
          return 'bg-gradient-to-b from-blue-600 to-red-200';
        case 'dusk':
          return 'bg-gradient-to-b from-blue-800 to-yellow-600';
        case 'night':
          return 'bg-gradient-to-b from-gray-900 to-gray-800';
        default:
          break;
      }
    }
  
      return (
          <div className={`w-full h-full absolute top-0 left-0  ${genBgColor()}`}>
              {/* {timeOfDay === 'night' ?
                  <Moon timeOfDay={timeOfDay} />
              :
                  <Sun timeOfDay={timeOfDay} />
              } */}
  
              <SetTimeOfDay timeOfDay={timeOfDay} setTimeOfDay={setTimeOfDay}  />
          </div>
      )
  }
  
  // const Sun = ({timeOfDay}) => {
  //     const sunPos = () => {
  //         switch (timeOfDay) {
  //             case 'dawn':
  //               return 'left-16 bottom-1/4';
  //             case 'sunrise':
  //               return 'left-1/4 bottom-1/2';
  //             case 'midday':
  //               return 'left-1/2 -translate-x-1/2 top-16';
  //             case 'sunset':
  //               return 'right-1/4 bottom-1/2';
  //             case 'dusk':
  //               return 'right-16 bottom-1/4';
  //             case 'night':
  //               return 'hidden';
  //             default:
  //               break;
  //           }
  //     }
  
  //     return (
  //         <div className={`w-16 h-16 absolute transform ${sunPos()} bg-yellow-400`} />
  //     )
  // }
  
  // const Moon = () => {
  //     return (
  //         <div className="w-16 h-16 absolute transform left-1/4 -translate-x-1/2 top-16 bg-gray-200" />
  //     )
  // }
  
  const SetTimeOfDay = ({timeOfDay, setTimeOfDay}) => {
      return (
        <div className="absolute z-30 top-4 left-4 p-4 flex flex-col gap-1 rounded-xl bg-gray-200 bg-opacity-50">
          {/* <h1 className={`cursor-pointer ${timeOfDay === 'dawn' && 'font-bold'}`}
            onClick={() => setTimeOfDay('dawn')}>Dawn</h1>
          <h1 className={`cursor-pointer ${timeOfDay === 'sunrise' && 'font-bold'}`}
            onClick={() => setTimeOfDay('sunrise')}>Sunrise</h1> */}
          <h1 className={`cursor-pointer ${timeOfDay === 'midday' && 'font-bold'}`}
            onClick={() => setTimeOfDay('midday')}>Day</h1>
          {/* <h1 className={`cursor-pointer ${timeOfDay === 'sunset' && 'font-bold'}`}
            onClick={() => setTimeOfDay('sunset')}>Sunset</h1>
          <h1 className={`cursor-pointer ${timeOfDay === 'dusk' && 'font-bold'}`}
            onClick={() => setTimeOfDay('dusk')}>Dusk</h1> */}
          <h1 className={`cursor-pointer ${timeOfDay === 'night' && 'font-bold'}`}
            onClick={() => setTimeOfDay('night')}>Night</h1>
        </div>
      )
    }