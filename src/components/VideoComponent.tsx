import video1 from "../assets/video/video.mp4"
import {useEffect, useRef} from "react";
import {videoTxt} from "../variables";
import {useScroll, useTransform, motion} from "framer-motion";

export const VideoComponent = () => {
    const videoRef = useRef()
    const txtRef = useRef()
    const {scrollYProgress} = useScroll({
        target: txtRef,
        offset: ["start end", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);


    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play()
        }
    }, []);
    return (
        <>
            <div className="relative sticky bg-white pt-[60px] top-0">
                <div className="h-[calc(100vh-60px)] sticky z-0 top-[60px]">
                    <video ref={videoRef} muted={true} playsInline={true} loop={true} preload='none' src={video1}
                           className="h-full w-screen object-cover"></video>
                </div>

                <motion.div ref={txtRef}
                            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
                            style={{
                                y
                            }}>
                    {videoTxt.map((el, index) => (
                        <p key={index}>{el}</p>
                    ))}
                </motion.div>
            </div>
            <div className="h-[150vh] bg-button-background-hover">

            </div>
        </>

    )
}