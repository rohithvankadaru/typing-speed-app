import React from 'react';

const Footer = ({ setParaSize }) => {


    function sizeHandler(event) {
        setParaSize(event.target.innerText)
    }

    return <div className="footer text-center">
        <div className='size-btn-container'>
            <button onClick={sizeHandler}>20</button>
            <button onClick={sizeHandler}>50</button>
            <button onClick={sizeHandler}>80</button>
            <button onClick={sizeHandler}>100</button>
        </div>
    </div>
}

export default Footer;