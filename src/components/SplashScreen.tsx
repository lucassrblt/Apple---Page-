import {motion} from "framer-motion";

export const SplashScreen = ({value}) => {

    return (
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: value ? 0 : -1000 }}
                transition={{ duration: 0.8, ease : "easeIn"}}
                className="absolute w-full min-h-screen bg-neutral-950 top-0 z-50 flex items-center justify-center">
                <p className="font-poppins font-medium text-base text-white">Made by <a className="cursor-pointer" href="https://www.linkedin.com/in/lucas-rimbault-b57773254/" target="_blank">@lucassrblt</a></p>
            </motion.div>
        )
}

