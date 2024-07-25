import './App.css'
import {AirpodsMax, MainNavbar, PresentationSection, SecondNavbar, TextSection} from "./components/AirpodsMax.tsx";
import {DigitalCrown} from "./components/DigitalCrown.tsx";
import {GallerySection} from "./components/GallerySection.tsx";
import {ModelSection} from "./components/ModelSection.tsx";

function App() {
    // const [displaySplashScreen, setDisplaySplashScreen] = useState(true)
    //
    // useEffect(() => {
    //     if(displaySplashScreen){
    //         document.body.style.overflow = 'hidden'
    //     }else {
    //         document.body.style.overflow = 'auto'
    //     }
    // }, [displaySplashScreen])
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         setDisplaySplashScreen(false)
    //     }, 3000)
    // }, []);

    return (
        <main className="">
            {/*<SplashScreen value={displaySplashScreen}/>*/}
            <MainNavbar/>
            <SecondNavbar/>
            <PresentationSection/>
            <TextSection/>
            <ModelSection />
            <DigitalCrown />
            <GallerySection />
            {/*<VideoComponent/>*/}
        </main>
    )
}

export default App
