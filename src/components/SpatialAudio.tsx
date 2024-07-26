import AudioSpatialImg from '../assets/images/airpods-spatialaudio.png';
import ringsTop from "../assets/images/airpods-rings-top.png";
import ringsBottom from "../assets/images/airpods-rings-bottom.png";
import {useScroll} from "framer-motion";
import {useEffect, useRef} from "react";

export const SpatialAudio = () => {
    const gradientRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: gradientRef,
    })

    useEffect(() => {
        scrollYProgress.on("change", (e) => {
            console.log(e)
            if(e > 0.5) console.log("Hello")
        })
    }, []);

    return (
        <section className="flex bg-black w-full items-center flex-col relative pt-72">
            <div className="w-[78vw] relative flex justify-center z-20">
                <img src={AudioSpatialImg}  className="w-full relative -left-6"/>
                <img src={ringsTop} className="absolute -top-28 w-[76%] left-42"/>
                <img src={ringsBottom} className="absolute w-[90%] bottom-28 w-[70%]"/>
            </div>
            <div className="flex flex-col absolute w-[30vw] gap-4 bottom-20 left-44 z-30">
                <p className="font-poppins font-medium text-[#6e6e73] text-lg"><span className="text-white">Personalized Spatial Audio with dynamic head tracking</span> gives you a theater‑like experience for movies and shows, with sound that surrounds you.1 Using built-in gyroscopes and accelerometers, AirPods Max and your iPhone, iPad, Mac, or Apple TV track the subtle motion of your head, anchoring sounds to your device.</p>
                <p className="font-poppins font-medium text-[#6e6e73] text-lg">And with Apple Music, Personalized Spatial Audio with dynamic head tracking places sound all around you to create a three-dimensional listening experience</p>
            </div>
            <div ref={gradientRef} className="gradient absolute w-full h-full bottom-0 opacity-0">
            </div>
        </section>
    )
}
