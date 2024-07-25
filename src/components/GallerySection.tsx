import {colorGallery, galleryImgFront, galleryImgSide} from "../variables";
import {useState} from "react";
import clsx from "clsx";
import {motion} from "framer-motion";

export const GallerySection = () => {
    const [selected, isSelected] = useState(0)
    return (
        <section className="flex flex-col px-8 mt-24 w-full gap-10">
            <header className="flex justify-between w-full px-4 h-fit items-end">
                <div className="h-fit">
                    <h6 className="font-poppins font-semibold text-6xl text-black w-[40vw] leading-tight">
                        Five colors. Anything but monotone.
                    </h6>
                </div>
                <div className="w-fit h-full flex gap-2 items-end">
                    {colorGallery.map((el, index) => (
                        <ColorElement key={index} elementColor={el} selected={selected === index}
                                      selectedHack={isSelected}/>
                    ))}
                </div>
            </header>
            <div className="flex gap-4">
                <ImgWrapper selected={selected}/>
                <FixImgWrapper selected={selected}/>
            </div>
        </section>
    )
}


const ImgWrapper = ({selected}) => {
    const getSelection = () => {
        return `${selected * -100}%`
    }

    return (
        <div className="h-fit bg-gallery-bg max-w-[58vw] flex overflow-hidden"
        >
            <motion.div className="flex w-full h-fit" animate={{
                x: `${getSelection()}`
            }}
                        transition={{ease: "easeInOut", duration: 0.8}}>
                {galleryImgFront.map((el, index) => {
                    return (
                        <img src={el} className="h-full min-w-full object-cover"/>
                    )
                })}
            </motion.div>
        </div>
    )
}

const FixImgWrapper = ({selected}) => {
    return (
        <div className="max-h-full bg-gallery-bg w-full flex justify-center relative">
            {galleryImgSide.map((el, index) => {
                return (
                    <motion.div key={index} className="absolute top-0 h-full"
                                transition={{duration: 1.4}}
                                animate={{opacity: index === selected ? 1 : 0}}>
                        <img src={el} className="h-full"/>
                    </motion.div>
                )

            })}
        </div>
    )
}

const ColorElement = ({elementColor, selected, selectedHack}) => {
    const color = elementColor[0]
    const getColor = () => color

    const handleSelected = () => {
        selectedHack(colorGallery.indexOf(elementColor))
        console.log(selected)
    }

    return (
        <motion.div
            className={clsx("flex py-1 px-1  rounded-full min-h-9 min-w-9", {"border border-secondnav-border": selected})}
            onClick={handleSelected} transition={{duration: 0.6}}>
            <div
                className={`w-full overflow-hidden w-full flex flex-col rounded-full cursor-pointer bg-${getColor()}`}
                style={{}}>
                <div className="h-1/2 w-full" style={{
                    backgroundColor: `${getColor()}`
                }}></div>
                <div className="h-1/2 w-full"
                     style={{
                         backgroundColor: `${elementColor[1]}`
                     }}
                ></div>
            </div>
        </motion.div>

    )
}