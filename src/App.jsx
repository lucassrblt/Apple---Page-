import {useState} from 'react'
import './App.css'
import {AirpodsMax, MainNavbar, PresentationSection, SecondNavbar, TextSection} from "./components/AirpodsMax.tsx";
import {TextParallaxContentExample} from "./components/TextParallaxContent.tsx";
import {useMotionValueEvent, useScroll} from "framer-motion";
import {TextSearch} from "lucide-react";

function App() {

    return (
        <>
            <MainNavbar/>
            <SecondNavbar/>
            <PresentationSection/>
            <TextSection/>
        </>
    )
}

export default App
