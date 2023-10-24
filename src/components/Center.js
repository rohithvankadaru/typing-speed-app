import React from 'react';

const Center = ({ oldParaSize, setParaSize, setForcedRender }) => {


    function sizeHandler(event) {
        setParaSize(event.target.innerText);
        if (oldParaSize == event.target.innerText) setForcedRender(Math.random());
    }

    return <div className="center text-center">
        <div className='size-btn-container'>
            <button onClick={sizeHandler}>20</button>
            <button onClick={sizeHandler}>50</button>
            <button onClick={sizeHandler}>80</button>
            <button onClick={sizeHandler}>100</button>
        </div>
    </div>
}

export default Center;