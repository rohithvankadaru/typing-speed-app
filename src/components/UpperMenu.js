import React from 'react';

export const UpperMenu = ({paraSize}) => {
    return (
        <div className='upper-menu flex justify-between align-center'>
            <p>15</p>
            <p>No of words: {paraSize}</p>
            <div className="timer-btn-container flex">
                <div>15s</div>
                <div>30s</div>
                <div>60s</div>
            </div>
        </div>
    )
}