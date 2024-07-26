import model from '../assets/images/airpods-secondmodel.jpg'
import top from '../assets/images/airpods-top2.jpg'

export const SecondModelSection = () => {
    return (
        <section className="bg-black w-full flex flex-col mt-64">
            <div className="flex flex-col p-32 gap-16">
                <div className="w-[60vw]"><h2 className="font-poppins font-semibold text-6xl text-white leading-tight">Computational audio. Key to performance.</h2></div>
                <div className="w-[55vw]"><p className="font-poppins font-medium text-lg text-[#6e6e73]">With a powerful Apple‑designed H1 chip in each cup, our custom acoustic design, and advanced
                    software, AirPods Max use computational audio to create a breakthrough listening experience. By
                    tapping into each chip’s 10 audio cores, computational audio helps block outside noise, adapts audio
                    to the fit and seal of your ear cushions, and makes movie scenes sound like they’re happening all
                    around you.
                </p></div>
            </div>
            <div className="flex gap-4 px-12">
                <div className="max-w-[56vw] flex flex-col items-center gap-8
                ">
                    <div><img src={model}/></div>
                    <div className="w-[85%]"><p className="font-poppins text-xl font-medium text-[#6e6e73]"><span className="text-white">Adaptive EQ</span> tailors sound to the bespoke fit and seal created by the ear cushions. Inward-facing microphones measure what you’re hearing, then adjust the frequencies of your music to deliver a rich, consistent experience that faithfully reproduces every note.</p></div>
                </div>
                <div className="flex flex-col gap-2">
                    <div><img src={top}/></div>
                    <div className="flex flex-col gap-4">
                        <p className="font-poppins text-lg font-medium text-[#6e6e73]">Industry‑leading <span className="text-white">Active Noise Cancellation</span> counters external sound with equal anti‑noise, allowing you to immerse yourself in what you’re listening to.</p>
                        <p className="font-poppins text-lg font-medium text-[#6e6e73]">Press the noise control button to switch to <span className="text-white">Transparency mode</span>, which lets outside sound in so you can interact naturally with your surroundings.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}