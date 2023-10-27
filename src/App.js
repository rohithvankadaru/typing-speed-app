import { useState } from 'react';
import { Header } from './components/Header';
import TypingBox from './components/TypingBox';
import Center from './components/Center';
import { UpperMenu } from './components/UpperMenu';
import './styles/App.css';
import './styles/Util.css';
import { randomWords } from './components/randomWords';

export const App = () => {

    const [wordsArray, setWordsArray] = useState(randomWords());

    return (
        <div className='App'>
            <Header />
            <UpperMenu paraSize={wordsArray.length} />
            <TypingBox wordsArray={wordsArray} />
            <Center setWordsArray={setWordsArray} />
        </div>
    )
}