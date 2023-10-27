import { Data } from "./Data";

const TypingBox = ({ paraSize }) => {

    function paraSizeHandler(size) {
        let ansArray = [];
        for (let i = 0; i < size; i++) {
            let index = Math.floor(Math.random() * size + 1);
            ansArray.push(Data[index]);
        }
        return ansArray;
    }

    return (
        <div className="typing-box text-center flex flex-col align-center">
            <code className="words flex flex-wrap">
                {
                    paraSizeHandler(paraSize).map(element =>
                        <span className="word">{element.split('').map(char => <span className="letter">{char}</span>)}</span>
                    )
                }
            </code>
            <input type="text" className="hidden-input" />
        </div>
    );
};

export default TypingBox;
