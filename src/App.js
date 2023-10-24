import React, { useState } from 'react';
import { Header } from './components/Header';
import TypingBox from './components/TypingBox';
import Center from './components/Center';
import { UpperMenu } from './components/UpperMenu';
import './styles/App.css';
import './styles/Util.css';

export const App = () => {

    const [paraSize, setParaSize] = useState(50);

    return (
        <div className='App'>
            <Header />
            <UpperMenu paraSize={paraSize} />
            <TypingBox paraSize={paraSize} />
            <Center setParaSize={setParaSize} />
        </div>
    )
}