import './Welcome.css';
import { WelcomeStep1 } from './components/WelcomeStep1';
import { useState } from 'react'
import { WelcomeStep2 } from './components/WelcomeStep2';

export function Welcome() {

    const [step, setStep] = useState(1)

    function onAdvance() {
        console.log('avançar')
        setStep(step + 1)
    }

    switch(step) {
        case 1: return <WelcomeStep1 onAdvance={onAdvance}/>
        case 2: return <WelcomeStep2 />
        default: return <></>
    }
}