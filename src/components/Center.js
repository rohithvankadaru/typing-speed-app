
const Center = ({ oldParaSize, setParaSize, setForcedRender }) => {


    function sizeHandler(event) {
        if (oldParaSize === event.target.innerText) setForcedRender(Math.random());
        else setParaSize(event.target.innerText);
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