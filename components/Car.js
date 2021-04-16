import { useState, useEffect } from 'react';



export default function Car({isEntered}) {
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        if (isEntered) {
            setIsMoving(true)
        }
    }, [isEntered])

    return (
        <div className={`w-16 h-8 absolute z-30 transform -translate-x-1/2 bottom-2 bg-gray-800 transition-all ease-in duration-700 ${isMoving ? 'left-1/2' : 'left-1/4'}`}>

        </div>
    )
}