import model from "../assets/images/aipods-model.jpg"
import ear from "../assets/images/airpods-ear.jpg"
import front from "../assets/images/airpods-top.jpg"
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {useEffect} from "react";


export const ModelSection = () => {
    const refImg = useRef(null);
    const {scrollYProgress} = useScroll({
        target: refImg,
        offset: ["start 100px", "end end"]

    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);


    return (
        <section className="flex w-full min-h-[200vh] px-8 mt-16 gap-8    ">
            <div className="min-w-[58vw] relative overflow-hidden">
                <motion.img ref={refImg} src={model} alt="model"
                            className="absolute -top-20 left-0"
                            style={{
                            y
                }}/>
            </div>
            <div className="w-full flex flex-col">
                <div className="w-full h-1/2 flex flex-col gap-4">
                    <img src={ear} alt="Airpods max"/>
                    <p className="font-poppins font-medium text-main-grey text-xl leading-tight">
                        A <span className="text-mainnav-black-hover">custom-designed mesh textile</span> wraps the ear cushions to provide pillow-like softness while listening.
                    </p>
                </div>
                <div className="w-full flex flex-col gap-4 mt-32">
                    <img src={front} alt="front"/>
                    <p className="font-poppins font-medium text-main-grey text-xl leading-tight">
                        Crafted with acoustically engineered memory foam, the <span className="text-mainnav-black-hover">ear cushions</span> gently create an immersive seal that is the foundation of incredible sound.
                    </p>
                </div>
            </div>
        </section>
    )
}