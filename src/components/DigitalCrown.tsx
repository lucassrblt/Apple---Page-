import digitalcrownimg from "../assets/images/digital-crown-image.png"
import digitalcrownvideo from "../assets/video/digital-crown-video.mp4"
import {useEffect, useRef} from "react";

export const DigitalCrown = () => {
    const videoRef = useRef()
    useEffect(() => {
        if(videoRef.current) videoRef.current.play()
    }, []);

    return (
        <div className="mt-12 relative flex justify-center">
            <div className="relative w-full flex justify-center">
                <div className="w-full h-[100vh]"><img src={digitalcrownimg} className="relative z-50 w-full h-full"/></div>
                <video ref={videoRef} src={digitalcrownvideo} className="absolute top-0" loop={true} muted={true} playsInline={true}  preload="none"></video>
            </div>
            <div className="absolute bottom-20 w-[32vw] z-50 text-center">
                <p className="font-poppins font-medium text-lg text-digital-crown-blue">
                    Press the <span className="text-white">Digital Crown </span>
                    to play and pause music or mute and unmute yourself on calls, and press twice to skip between tracks or end calls. Turn it to precisely control volume.
                </p>
            </div>
        </div>
    )
}