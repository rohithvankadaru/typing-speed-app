import React, { useState } from 'react';
import { Header } from './components/Header';
import TypingBox from './components/TypingBox';
import Footer from './components/Footer';
import { UpperMenu } from './components/UpperMenu';
import './App.css';
import './Util.css';

export const App = () => {

    const [paraSize, setParaSize] = useState(50);

    return (
        <div className='App'>
            <Header />
            <UpperMenu paraSize={paraSize}/>
            <TypingBox paraSize={paraSize} />
            <Footer setParaSize={setParaSize} />
        </div>
    )
}