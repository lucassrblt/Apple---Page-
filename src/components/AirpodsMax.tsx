import {mainNavbar, sectionSecondNav} from "../variables";
import Apple from "../assets/images/apple.svg"
import {Search, ShoppingCart} from "lucide-react";
import clsx from "clsx"
import {useEffect, useRef, useState} from "react";
import {motion, useAnimation, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import AirPodsMaxImg from "../assets/images/main.png";

export const AirpodsMax = () => {
    return (
        <section className="w-screen overflow-x-hidden">
            <MainNavbar/>
            <SecondNavbar/>
            <PresentationSection/>
            <TextSection/>
        </section>
    )
}

export const MainNavbar = () => {
    return (
        <nav className="flex h-[8vh] w-full px-[10vw] items-center justify-between">
            <img src={Apple} alt="Apple Logo" className="h-[16px]"/>
            <ul className="flex gap-8">
                {mainNavbar.map((item, index) => (
                    <li
                        key={index}
                        className="font-poppins text-xs text-mainnav-black font-regular hover:text-mainnav-black-hover h-fit cursor-pointer">{item}</li>
                ))}
            </ul>
            <div className="flex gap-8">
                <Search className="stroke-gray-700" size={16}/>
                <ShoppingCart className="stroke-gray-700" size={16}/>
            </div>
        </nav>
    )
}

export const SecondNavbar = () => {
    const [isPinned, setIsPinned] = useState(false)
    const controls = useAnimation();
    const stickyRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (stickyRef.current) {
                const rect = stickyRef.current.getBoundingClientRect();
                if (rect.top <= 0) {
                    setIsPinned(true)
                }else{
                    setIsPinned(false)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const variants = {
        hidden: {background: ""},
        visible: {background: '#000'}
    }

    return (
        <div className="w-full sticky mt-2 z-[51] flex justify-center top-0">
            <motion.div
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{duration: 0.2}}
                ref={stickyRef}
                onClick={() => console.log('test', isPinned)}
                className={clsx("flex justify-between py-3 border-b border-secondnav-border ", {"w-[calc(100vw-20vw)] backdrop-blur-none" : !isPinned},{"w-screen backdrop-blur-xl bg-slate-50/80 px-[10vw]" : isPinned === true})}>
                <div className="w-fit h-fit">
                    <h6 className="font-poppins text-mainnav-black text-xl font-medium">AirPods Max</h6>
                </div>
                <div className="flex gap-8 items-center">
                    <ul className="flex gap-6">
                        {sectionSecondNav.map((el, index) => {
                            return (
                                <li className={clsx("relative h-full flex items-center font-poppins text-xs text-gray-600 font-regular cursor-pointer", {"text-black": index === 0})}
                                    key={index}><span>{el}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <Button btnTxt="Buy"/>
                </div>
            </motion.div>
        </div>

    )
}

const Button = ({btnTxt}) => {
    return (
        <button
            className="rounded-3xl px-3 py-1 font-poppins font-regular text-white text-xs bg-button-background hover:bg-button-background-hover">{btnTxt}</button>
    )
}

export const PresentationSection = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });

    useEffect(() => {
        scrollYProgress.on("change", e => console.log(e))
    }, []);

    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.2]);

    return (
        <div className="flex relative items-center w-full justify-center mt-2">
            <motion.div
                className="z-10 w-[40vw]"
                initial={{
                    opacity: 0,
                    scale: 1.4
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.6
                }}
                style={{
                    scale
                }}
            >
                <img ref={targetRef} src={AirPodsMaxImg} alt="Airpods Max" className="w-full"/>
            </motion.div>
            <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    delay: 1,
                    duration: 0.6
                }}
                className="absolute font-poppins font-semibold text-black/90 text-[186px]">AirPods Max
            </motion.p>
        </div>

    )
}

export const TextSection = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex text-center w-[75vw] items-center justify-center mt-24">
                <p className="text-black font-poppins font-semibold text-3xl">Introducing AirPods Max — a perfect
                    balance of
                    exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal
                    listening
                    experience is here.</p>
            </div>
        </div>
    )
}

