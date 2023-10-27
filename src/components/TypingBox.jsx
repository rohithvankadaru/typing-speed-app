import { useEffect, useRef, useState } from "react";
import { randomWords } from "./randomWords";


const TypingBox = ({ wordsArray }) => {

    const inputRef = useRef(null);

    const inputFocus = () => {
        inputRef.current.focus();
    }

    useEffect(() => {
        inputFocus();
    }, []);



    function liveType(event) {
        console.log(event.target.value);
    }

    return (
        <div className="typing-box text-center flex flex-col align-center" onClick={inputFocus}>
            <code className="words flex flex-wrap">
                {
                    wordsArray.map(element =>
                        <span className="word">{element.split('').map(char => <span className="letter">{char}</span>)}</span>
                    )
                }
            </code>
            <input type="text" className="hidden-input" ref={inputRef} onInput={(event) => console.log(event.target.value)} />
        </div>
    );
};

export default TypingBox;
