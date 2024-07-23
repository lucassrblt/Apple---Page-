import './App.css'
import {AirpodsMax, MainNavbar, PresentationSection, SecondNavbar, TextSection} from "./components/AirpodsMax.tsx";
import {VideoComponent} from "./components/VideoComponent.tsx";

function App() {

    return (
        <>
            <MainNavbar/>
            <SecondNavbar/>
            <PresentationSection/>
            <TextSection/>
            <VideoComponent/>
        </>
    )
}

export default App
