import React, { useState } from 'react';

export const UpperMenu = ({ paraSize }) => {

    const [timer, setTimer] = useState(15);

    function updateTimerFn(event) {
        setTimer(event.target.innerText.substring(0, 2));
    }

    return (
        <div className='upper-menu flex justify-between align-center'>
            <p>{timer}</p>
            <p>No of words: {paraSize}</p>
            <div className="timer-btn-container flex">
                <div onClick={updateTimerFn}>15s</div>
                <div onClick={updateTimerFn}>30s</div>
                <div onClick={updateTimerFn}>60s</div>
            </div>
        </div>
    )
}